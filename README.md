# recipe-repo

Proof-of-concept for a recipe generator to fulfill the CodeFellows 301 final project.

# Group Members
* Chloie Parsons
* Jeff Lawrence
* Michael Chapman

# Description of Project
A mobile-first server-side rendered interactive site for looking up recipes.

# Version 1.7.0
# Libraries and Frameworks
* eslint
* jquery
* ejs
* express
* superagent
* pg (postgres)
* method-override
* dotenv

# API Library
TheMealDB (themealdb.com)

# Problem Domain
To build a website that allows users to search for, edit save and delete recipes to be viewed and used over time.

# Licensing/Attribution
icomoon.com (icons)

# MVP1:
* Group Title
* Mobile-First Design
* About Us Page
* 3 Photos & Elevator Pitches
* Nav Bar
* View Saved Recipes on Index
* Search For New Recipes
* View Searched Recipes
* Render Form on Search Recipes
* Save/Update/Delete Recipes
* View Single Recipe
* Click YouTube Link
* Add custom fonts
* Smokin' hot CSS

# Stretch Goals
# MVP 2
* Popout menu on 'Details' page
* Added quantities to ingredients
* Popup to confirm 'Delete'
* Add error page for incorrect search
* Tablet Design
* Desktop Design
* 'To Top' Button

# MVP 3
* Cookbook popout to select specific cookbooks
* Select a cookbook and render its recipes
* Delete specific cookbooks
* Show total saved recipes
* Click on an area for additional information (not button reliant)

# MVP 4
* User login / individualized account
* Drag/drop save functionality
* User input new recipe
* Pagination
* Search By Main Ingredient
* In viewport YouTube player window

# User Installation Instructions to Work With Codebase

Npm install:
* dotenv
* ejs
* pg
* express
* method-override
* superagent

ENV Setup:
* PORT=________
* DATABASE_URL=____________
* RECIPE_API=_____________

# Api Endpoint With Sample Response

Search meal by name
https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

```
{
  "meals": [
    {
      "idMeal": "52771",
      "strMeal": "Spicy Arrabiata Penne",
      "strDrinkAlternate": null,
      "strCategory": "Vegetarian",
      "strArea": "Italian",
      "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      "strTags": "Pasta,Curry",
      "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08",
      "strIngredient1": "penne rigate",
      "strIngredient2": "olive oil",
      "strIngredient3": "garlic",
      "strIngredient4": "chopped tomatoes",
      "strIngredient5": "red chile flakes",
      "strIngredient6": "italian seasoning",
      "strIngredient7": "basil",
      "strIngredient8": "Parmigiano-Reggiano",
      "strIngredient9": "",
      "strIngredient10": "",
      "strIngredient11": "",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": null,
      "strIngredient17": null,
      "strIngredient18": null,
      "strIngredient19": null,
      "strIngredient20": null,
      "strMeasure1": "1 pound",
      "strMeasure2": "1/4 cup",
      "strMeasure3": "3 cloves",
      "strMeasure4": "1 tin ",
      "strMeasure5": "1/2 teaspoon",
      "strMeasure6": "1/2 teaspoon",
      "strMeasure7": "6 leaves",
      "strMeasure8": "spinkling",
      "strMeasure9": "",
      "strMeasure10": "",
      "strMeasure11": "",
      "strMeasure12": "",
      "strMeasure13": "",
      "strMeasure14": "",
      "strMeasure15": "",
      "strMeasure16": null,
      "strMeasure17": null,
      "strMeasure18": null,
      "strMeasure19": null,
      "strMeasure20": null,
      "strSource": null,
      "dateModified": null
    }
  ]
}
```
Filter by main ingredient
https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

```
{
  "meals": [
    {
      "strMeal": "Chicken Couscous",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
      "idMeal": "52850"
    },
    {
      "strMeal": "Chicken Fajita Mac and Cheese",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
      "idMeal": "52818"
    },
    {
      "strMeal": "Chicken Ham and Leek Pie",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg",
      "idMeal": "52875"
    },
    {
      "strMeal": "General Tso's Chicken",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1529444113.jpg",
      "idMeal": "52951"
    },
    {
      "strMeal": "Katsu Chicken curry",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg",
      "idMeal": "52820"
    },
    {
      "strMeal": "Rappie Pie",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg",
      "idMeal": "52933"
    }
  ]
}
```
# Database Schema

```
DROP TABLE IF EXISTS cookbooks;
DROP TABLE IF EXISTS recipes;


CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  instructions TEXT,
  image_url TEXT,
  youTube_link TEXT,
  FOREIGN KEY (cookbooks_id) REFERENCES cookbooks (id)
);

CREATE TABLE cookbooks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
)
```
