import AbstractView from "./AbstractView.js"
export default class extends AbstractView{
    constructor(params){
        //super use for bring constructoir from parents to child/key word.
        super(params)
        this.setTitle('Dashboard')
    }
        async getHtml(){
            return `
            
            <h2>brief project description</h2><br><hr>
            <h6>In this SPA, I have installed Express, Request, and dotenv in my project and configured them. Let me explain how this SPA works. It consists of four main parts:</h6><br>
            

                <ul>
                    <li> The first part, "About Food," simply provides information about food, without any further details.</li>
                    <li>In the second part, when you click on "All Recipes" with the address "recipes-list," you can retrieve a list of 50 random foods. This data is obtained through a REST API available at the following URL:
                    "url = "https://api.spoonacular.com/recipes/random?number=50&" + "apiKey=" + API_KEY".
                    </li>
                    <li> The third part is an additional page that appears when you click on "Vegan Recipes" with the address "recipe-vegan." On this page, you can obtain the list of vegan dishes from among the 50 random foods previously retrieved from the URL. This information is stored in the "recipes.json" file located in the "data" folder. In fact, the information is extracted from this file to be displayed on the page.
                    </li>
                    <li> Every time you run the server, the "recipes.json" file is regenerated with new data</li>   
                     <li> Finally, if you click on an item in the food list, you can obtain detailed information about that food by accessing the address "recipe-single/:id"</li>
                    <li>There is also another part that displays all the commands and instructions of my SPA. I will try to upload a short video on my site.
                    </li>
                 </ul><br><hr>

            <h2>all command lines</h2>
            <ul>
                <li class="@font-size-h5">npm init -y</li>
                <li class="@font-size-h5">npm i express request dotenv</li>
                <li class="@font-size-base">npm start / node index.js</li>
                <li>mkdir frontend</li>
                <li>cd frontend</li>
                <li>mkdir static</li>
                <li>cd static</li>
                <li>mkdir css</li>
                <li>mkdir data</li>
                <li>mkdir js</li>
            </ul><br><hr>
            
            <h2>GitHub Adrresse</h2>
            <h5>https://github.com/Safoora-Mansouri/SPA-restAPI.git</h5>
                        
            
            
            
            `;
        }
    }