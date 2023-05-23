brief project description
In this SPA, I have installed Express, Request, and dotenv in myproject and configured them. Let me explain how this SPA works. Itconsists of four main parts:

1.The first part, "About Food," simply provides information about food,without any further details.
2.In the second part, when you click on "All Recipes" with the address"recipes-list," you can retrieve a list of 50 random foods. This data isobtained through a REST API available at the following URL: "url ="https://api.spoonacular.com/recipes/random?number=50&" + "apiKey="+ API_KEY".
3.The third part is an additional page that appears when you click on"Vegan Recipes" with the address "recipe-vegan." On this page, you canobtain the list of vegan dishes from among the 50 random foodspreviously retrieved from the URL.
This information is stored in the "recipes.json" file located in the "data"folder. In fact, the information is extracted from this file to be displayedon the page.
4.Every time you run the server, the "recipes.json" file is regeneratedwith new data
5.Finally, if you click on an item in the food list, you can obtain detailedinformation about that food by accessing the address "recipe-single/:id"
There is also another part that displays all the commands andinstructions of my SPA. I will try to upload a short video on my site.

/////////////////////////////////////////////////////
all command lines
npm init -y
npm i express request dotenv
npm start / node index.js
mkdir frontend
cd frontend
mkdir static
cd static
mkdir css
mkdir data
mkdir js
////////////////////////////////////////////////////
GitHub Adrresse
https://github.com/Safoora-Mansouri/SPA-restAPI.git