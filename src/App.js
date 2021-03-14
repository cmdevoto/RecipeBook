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

// create recipe list component

  function App() { 
    //create 2 recipe arrays and add them to the state using the useState hook
    const [recipes, setRecipes] = useState([]);  
    //const [recipes, setRecipes] = useState({})

    // the useEffect hook is used here to load user data asynchronously

    useEffect(() => {
      return getRecipes().then((data) => {
        setRecipes(data);
      });
    });

    return html`
      <${Header} title="RecipeList">
        Welcome to your recipe booklet
      </${Header}>
      <${Recipe}>
      </${Recipe}>
      <ul>
      ${recipes.map(
        (recipe) =>
          html` <li key="${recipe}">
            ${recipe.name} | ${recipe.ingredients} ${recipe.steps}
          </li>`
      )}
      </ul>
    `;
    
  }
  
  render(html` <${App} /> `, document.getElementById("app"));
  