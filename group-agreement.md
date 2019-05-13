# We, the members of Recipe Rocket, agree to the following:

# General Principles
Practice the golden rule and remember that this is a team effort.

Consider scope carefully.

Stick to familiar techniques where possible.

The functionality of our project should be immediately obvious to fresh eyes.

Keep it simple.

Maintain humor.

# Expectations

Members will be present each day and give their best effort.

Members will seek help when encountering issues they can't quickly resolve (within 10-15 minutes) on their own.

Members have the option to work outside of class hours, but aren't expected to unless the group revises these expectations at the end of day meeting.

At the end of each day members will meet to discuss their progress and any necessary revisions to our expected work hours. These decisions will be made by group vote where the simple majority wins. Exceptions made be made in case of exceptional circumstances.

Members will meet as a group approximately every 90 minutes to maintain coordination and focus as a team.

# Conflict Plan 

When conflict is encountered, we vow to:
* discuss the difference of ideas and try to settle the issue as individuals;
* take some time and space to reflect and consider the issue if necessary;
* bring in the whole group to the discussion if a resolution cannot be reached;
* escalate to instructors as an absolute last resort;

# Communication Plan 
How will you communicate after hours and on the weekend? 
- Using slack private message for group Use phone numbers as a backup or in case of emergency.

What is your strategy for ensuring everyone's voices are heard? 
- Ask questions: this benefits the individual and the group. Keep an eye out on each other.

How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up? 
- Empathetically consider each other. Give gentle feedback. Welcome the feedback.

# User Installation Instructions to Work With Codebase

Npm install:
*dotenv
*ejs
*pg
*express
*method-override
*superagent

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
