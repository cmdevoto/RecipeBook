import {
  html,
  render,
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Header } from "./components/Header.js";
import { Recipe } from "./components/Recipe.js";

function getRecipes() {
const axios = window.axios;
return axios.get("src/recipes.json").then((response) => {
    console.log(response.data.recipes);
    return response.data.recipes;
});
}

console.log("test")


function App() { 
//create 2 recipe arrays and add them to the state using the useState hook
const [recipes, setRecipes] = useState([]);  

const bodyStyle = {
  backgroundColor: "#DBD7FF",
}
// the useEffect hook is used here to load user data asynchronously

useEffect(() => {
  return getRecipes().then((data) => {
    setRecipes(data);
  });
});

return html`
  <body style=${bodyStyle}>
    <${Header} title="My Recipe Book">
      Welcome to your recipe booklet
    </${Header}>
    
    ${recipes.map(
      (recipe) =>
        html` <li key="${recipe}">
          <${Recipe} name=${recipe.name} ingredients=${recipe.ingredients} steps=${recipe.steps} imgPath=${recipe.imgPath} >
          </${Recipe}>
        </li>`
    )}
  </body>
  `; 
}

render(html` <${App} /> `, document.getElementById("app"));