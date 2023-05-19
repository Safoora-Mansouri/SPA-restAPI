// Import views
import aboutFood from "./view/aboutFood.js";
import Posts from "./view/Posts.js";
import PostView from "./view/PostView.js";
import VeganRecipes from "./view/VeganRecipes.js";
import lignesDeCommande from "./view/lignesDeCommande.js";

// Regex function to convert path to regular expression
const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

// Get parameters from the matched result
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
};

const router = async () => {
  const routes = [
    { path: "/", view: aboutFood },
    { path: "/recipes-list", view: Posts },
    { path: "/recipe-single/:id", view: PostView },
    { path: "/recipe-vegan", view: VeganRecipes },
    { path: "/lignes-de-commande", view: lignesDeCommande },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));
  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
