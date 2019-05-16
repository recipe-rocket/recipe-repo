'use strict';

// App Dependencies
const express = require('express');
const superagent = require('superagent');
require('dotenv').config();
const pg = require('pg');
const methodOverride = require('method-override');

// App Setup
const app = express();
const PORT = process.env.PORT || 3000;

// App Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

//DataBase Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// Set view engine for server side templating
app.set('view engine', 'ejs');

// Constructor
function Recipe(data) {
  let count = 1;
  let amountArr = [];

  while (data[`strIngredient${count}`] !== '') {
    let ingredient = `strIngredient${count}`;
    let amount = `strMeasure${count}`;
    let temp = `${data[amount]} ${data[ingredient]}`;
    amountArr.push(temp);
    count++;
  }

  this.name = data.strMeal;
  this.instructions = data.strInstructions;
  this.ingredients = amountArr;
  this.image = data.strMealThumb;
  this.youtubeLink = data.strYoutube;
  this.cookbook = 'general';
}

//Handlers
let loadHome = (request, response) => {
  let SQL = 'SELECT * FROM recipes;';

  return client.query(SQL)
    .then(results => {
      response.render('index', {recipes: results.rows, title: 'Cookbook Launchpad'});
    });
};

let loadSearch = (request, response) => {
  // get request query
  let query = request.query.search;
  let url = `https://www.themealdb.com/api/json/v1/${process.env.RECIPE_API}/search.php?s=${query}`;
  // send API request
  superagent.get(url)
    .then(result => {
      if (result.body.meals) {
        return result.body.meals.map(meal => {
          return new Recipe(meal);
        });
      } else {
        return false;
      }
    })
    .then(results => {
      if (!results) {
        response.render('pages/noresults');
      } else {
        response.render('pages/search', {recipes: results, title: `Search Results: ${query}`});
      }
    })
    .catch((error) => errorMessage(error, response));
};

let saveRecipe = (request, response) => {
  let { name, instructions, ingredients, image, youtubeLink, cookbook} = request.body;
  let SQL1 = 'INSERT INTO cookbooks(nameCookbook) VALUES ($1) RETURNING id;';
  let values1 = [cookbook];

  let SQL3 = `SELECT * FROM cookbooks WHERE cookbooks.nameCookbook=$1;`;
  let values3 = [cookbook];

  return client.query(SQL3, values3)
    .then(exists => {
      if (!exists.rows.length || exists.rows.length === 0) {
        return client.query(SQL1, values1)
          .then(result => {
            return result.rows[0].id;
          });
      } else {
        return exists.rows[0].id;
      }
    })
    .then(result => {
      let SQL2 = 'INSERT INTO recipes(name, instructions, ingredients, image, youtubeLink, cookbooks_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;';
      let values2 = [name, instructions, ingredients, image, youtubeLink, result];

      return client.query(SQL2, values2)
        .then (result => {
          response.redirect(`/detail/${result.rows[0].id}`);
        })
        .catch((error) => errorMessage(error, response));
    });
};

let renderDetail = (request, response) => {
  let SQL = 'SELECT * FROM recipes JOIN cookbooks ON cookbooks.id=recipes.cookbooks_id WHERE recipes.id=$1;';

  let values = [request.params.id];

  return client.query(SQL, values)
    .then(results => {
      let ingredients = results.rows[0].ingredients.split(',');
      response.render('pages/detail', {recipes: results.rows, ingredients: ingredients, title: `Details: ${results.rows[0].name}`, id: values[0]});
    })
    .catch((error) => errorMessage(error, response));
};

let loadAbout = (request, response) => {
  response.render('pages/about', {title: 'About Us!'});
};

let updateDetail = (request, response) => {
  let {name, instructions, ingredients, cookbook} = request.body;

  let SQL2 = 'INSERT INTO cookbooks(nameCookbook) VALUES ($1) RETURNING id;';
  let values2 = [cookbook];

  let SQL3 = `SELECT * FROM cookbooks WHERE cookbooks.nameCookbook=$1;`;
  let values3 = [cookbook];

  return client.query(SQL3, values3)
    .then(exists => {
      if (exists.rows.length > 0) {
        return exists.rows[0].id;
      } else {
        return client.query(SQL2, values2)
          .then(result => {
            return result.rows[0].id;
          });
      }
    })
    .then(result => {
      let SQL = 'UPDATE recipes SET name=$1, instructions=$2, ingredients=$3, cookbooks_id=$4 WHERE id=$5;';
      let values = [name, instructions, ingredients, result, request.params.id];
      return client.query(SQL, values)
        .then(() => {
          response.redirect(`/detail/${request.params.id}`);
        })
        .catch((error) => errorMessage(error, response));
    })
    .catch((error) => errorMessage(error, response));
};

let deleteRecipe = (request, response) => {
  let SQL = 'DELETE FROM recipes WHERE id=$1;';
  let values = [request.params.id];


  return client.query(SQL, values)
    .then(() => {
      let SQL1 = 'DELETE FROM cookbooks WHERE id=$1;';
      let values1 = [request.body.cookbookID];

      client.query(SQL1, values1)
        .then(response.redirect('/'))
        .catch((error) => errorMessage(error, response));
    });
};

//Routes
app.get('/', loadHome);
app.get('/search', loadSearch);
app.get('/detail/:id', renderDetail);
app.put('/update/:id', updateDetail);
app.delete('/delete/:id', deleteRecipe);
app.post('/save', saveRecipe);
app.get('/about', loadAbout);


// Error Catcher
app.get('*', (request, response) => response.status(404).send('This route does not exist'));

let errorMessage = (error, response) => {
  response.render('pages/error', {error: 'OH NO!'});
};

//Listener
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
