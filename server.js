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
  response.render('index');
};

let loadSearch = (request, response) => {
  // get request query
  let query = request.query.search;
  let url = `https://www.themealdb.com/api/json/v1/${process.env.RECIPE_API}/search.php?s=${query}`;
  // send API request
  superagent.get(url)
    .then(result => {
      return result.body.meals.map(meal => {
        return new Recipe(meal);
      });
    })
    .then(results => {
      response.render('pages/search', {recipes: results});
    })
    .catch(() => errorMessage());
};

let saveRecipe = (request, response) => {
  console.log('hello');
};

let loadAbout = (request, response) => {
  response.render('pages/about');
};

//Routes
app.get('/', loadHome);
app.get('/search', loadSearch);
app.post('/save', saveRecipe);
app.get('/about', loadAbout);

// Error Catcher
app.get('*', (request, response) => response.status(404).send('This route does not exist'));

let errorMessage = () => {
  let errorObj = {
    status: 500,
    responseText: 'Sorry something went wrong',
  };
  return errorObj;
};

//Listener
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
