import AbstractView from "./AbstractView.js";
async function getData(url) {

  const response = await fetch(url);
  return response.json();
}


export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.params = params;
    this.setTitle("Visualiser Recipies");
  }

  async getHtml() {
    
    const nu = Number(this.params.id);
    ///////////////////////////////////////////////////////////////    
       const { recipes } = await getData("/static/data/recipes.json");
    
    // const iten = await getData("http://localhost:8082/recpies/"+ nu);

////////////////////////////////////////////////////////////

   const item = await recipes.find((item) => item.id === nu);

    console.log(item);

    return ` <main class="p-5">
       <section class=" w-75 m-auto">
        <img class="d-block m-auto mt-5 rounded rounded-5 shadow-lg w-75 " src=" ${item.image}" alt="">
        <h1 class="my-4 text-center"> ${item.title}</h1>
        <p class="py-3">
           ${item.summary}
        </p>
        <div><span class="h6">Source:</span> sdfsfdsdf</div>
        
        <a class="mt-4 d-inline-block " href='/recipes-list-' data-link><i class="bi bi-arrow-left"></i> Retourner</a>
       </section>
    </main>`;
  }
}

