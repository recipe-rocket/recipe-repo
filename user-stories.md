# User Stories
# General

* As a user, I want a navigation bar with eye-catching styling and descriptive names, so that I can navigate quickly to whatever I’d like to see on the web app.
* As a user, I want to know where I am on the page by referring to the title of the page.

# index.ejs

* As a user, I want the index page to display all saved recipes in an informative layout so I can see my saved recipes.
* As a user, I want to be able to click on a 'View Details' button for each image so I can be redirected to a view-specific details page for that recipe.
* As a user, I want to be able to navigate to a search page so I can have access to multiple pages of the website.
* As a user, I want a clean ux/ui so the website is nice to look at and compelling to use.

* As a member of the development team, I want to template using ejs to reduce the amount of code in my codebase.
* As a member of the development team, I want to use a get request in order to get the recipes from the database to be displayed in index. 

# about.ejs

* As a user, I’d like to see development team introductions, so that I can place the project into the context of the their educational path.
* As a user, I'd like to be able to find a way to contact the creators of the project, so I can forward any follow-up questions to the appropriate person.
* As a member of the development team, I want to come up with an engaging group name, so that people will be more likely to remember us and our presentation.
* As a member of the development team, I want to display a photo of each of us along with a short biography, so that users can familiarize themselves with the development team.

# search.ejs

* As a user, I want to be able to search for recipes by name using a form so that I can find recipes I want.
* As a user, I want to submit the form and be redirected to a searches/show page so I can view the recipes that I searched.
* As a user, I want to be able to navigate back to the index page so I can have access to multiple pages.
* As a member of the development team, I want to submit a form using a get request which sends form information, and returns details through a redirect to searches-show so users can view what they searched.
* As a member of the development team, I want to run the searched data through a constructor function so that it is returned to the client in a structured format. 


# searches/show.ejs

* As a user, I want to be able to view the images I searched for in a clean layout so I can decide what to save.
* As a user, I want to be able to click a 'View Details' button on individual recipes so I can use a form to edit the information and can customize how this recipe is saved. 
* As a user, I want to be able to click a 'Save To Pantry' button so that this recipe can be saved in my database for later use. 
* As a user, I want to be navigated away from searches/show page on db submit so I can view the details of the recipe I saved in the details view page.
* As a user, I want to be able to navigate back to searches so I can have access to multiple pages in the site.
* As a member of the development team, I want to be able to submit a form using a post request to save the recipe with the users' edits in the database. 
* As a member of the development team, I want the form's post request to redirect users to the details view page so the user can view their saved recipe.

# details/show

* As a user, I want to be able to click an 'Edit' button to edit the recipe and save these edits to the database so my edits will persist. 
* As a user, I want to be able to click a 'Delete' button which deletes the recipe out of the database so it won't be displayed in my pantry anymore. 
* As a user, I want to be able to navigate from details back to index so I have access to other pages in the website. 
* As a member of the development team, I want to use a get request on page load to query the database for saved recipes which will get ran through a for-each loop so all recipes will be rendered to the page. 
