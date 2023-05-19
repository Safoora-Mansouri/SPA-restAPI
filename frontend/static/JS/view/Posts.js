import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("List Of Recipies");
  }
  async getHtml() {


    async function getData(url) {
      const response = await fetch(url);
      return response.json();
    }
  
     const { recipes } = await getData("/static/data/recipes.json");
      // const data = await getData("http://localhost:8082/recpies");
console.log({ recipes });
// destructuring 


    let listPosts = "<ul>";
    for (let i in recipes) {
      listPosts +=
        "<li><a href='/recipe-single/" +
        recipes[i]["id"] +
        "'data-link>" +
        recipes[i]["title"] +
        "</a></li>";
    }
    listPosts += "</ul>";
    return ` <h1>List of 50 Random Recipies</h1>` + listPosts;
  }
}
