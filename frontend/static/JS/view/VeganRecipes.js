import AbstractView from "./AbstractView.js";
async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.params = params;
    this.setTitle("Vegan Recpies");
  }

  async getHtml() {
    // const nu = Number(this.params.id);
    ///////////////////////////////////////////////////////////////
    const { recipes } = await getData("/static/data/recipes.json");

    // const iten = await getData("http://localhost:8082/recpies/"+ nu);

    ////////////////////////////////////////////////////////////

    const veganItems = await recipes.filter((item) => item.vegan === true);

    console.log(veganItems);

    let listPosts = "<ul>";
    for (let i in veganItems) {
 


    listPosts +=
        "<li><a href='/recipe-single/" +
        veganItems[i]["id"] +
        "'data-link>" +
        veganItems[i]["title"] +
        "</a></li>";
    }
    listPosts += "</ul>";
    
    return ` <h1>List of Vegan Recipies</h1>` + listPosts;
  
  }
}
