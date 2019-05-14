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

//Handlers
let loadHome = (request, response) => {
  response.render('index'); 
}

let loadAbout = (request, response) => {
  response.render('pages/about'); 
}

//Routes
app.get('/', loadHome);
app.get('/about', loadAbout);

// Error Catcher
app.get('*', (request, response) => response.status(404).send('This route does not exist'));

//Listener
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));