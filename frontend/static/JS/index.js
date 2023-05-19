//7 import view
import aboutFood from "./view/aboutFood.js";
import Posts from "./view/Posts.js";
import PostView from "./view/PostView.js";
import VeganRecipes from "./view/VeganRecipes.js";
import lignesDeCommande from "./view/lignesDeCommande.js";

//10 Regex
const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
//////////////////////////////////////////////////////////////////////////////
//11 Get Params
const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );
  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
  // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));
  //return {}
};
////////////////////////////////////////////////////////////////////////////
//1 rout
const router = async () => {
  //10.1 test regex
  // console.log(pathToRegex("/post-view/:id"));
  const routes = [
    { path: "/", view: aboutFood },
    { path: "/recipes-list", view: Posts },
    { path: "/recipe-single/:id", view: PostView },
    { path: "/recipe-vegan", view: VeganRecipes },
    { path: "/lignes-de-commande", view: lignesDeCommande },
  ];
  //2 match function
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });
  console.log(potentialMatches);
  //3 find view
  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }
  console.log(match.result);

  // console.log(match.route.view())
//////////////////////////////////////////////////////////////

  //8 Render view
  const view = new match.route.view(getParams(match));

  console.log(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();
};

///////////////////////////////////////////////////////
//9 use nav back button
window.addEventListener("popstate", router);

//5 navigate state
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

//4 executer la route
document.addEventListener("DOMContentLoaded", () => {
  //6 SPA link
  document.body.addEventListener("click", (e) => {
    //without refresh we could change the address in browsers
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
