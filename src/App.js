import {
  html,
  render,
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Header } from "./components/Header.js";
import { Recipe } from "./components/Recipe.js";


// function to retrieve json data information -- logged when testing
function getRecipes() {
  const axios = window.axios;
  return axios.get("src/recipes.json").then((response) => {
    //console.log(response.data.recipes);
    return response.data.recipes;
  });
}

function App() { 
  //create 2 recipe arrays and add them to the state using the useState hook
  const [recipes, setRecipes] = useState([]);  

  // styling for things within the App function (body, forms)
  const bodyStyle = {
    backgroundColor: "#DBD7FF"
  }

  const formStyle = {
    fontFamily: "Nunito"
  }

  const inputStyle = {
    width: "50%",
    padding: "7px",
    border: "2px solid #3B26FF"
  }

  // the useEffect hook is used here to load user data asynchronously

  useEffect(() => {
    return getRecipes().then((data) => {
      setRecipes(data);
    });
  });

  // returning html with inline css -- using Header and Recipe components
  return html`
    <body style=${bodyStyle}>
      <${Header} title="My Recipe Book">
        Welcome to your recipe booklet
      </${Header}>

      <p style=${formStyle}> Add New Recipe! </p>
      <form>
        <p style=${formStyle}>
          Recipe Name: <input style=${inputStyle} type="text" name="cook" size="15"/>
        <p>
          Ingredients: <input style=${inputStyle} type="text" name="cook" size="15"/>
        </p>
        <p>
          Steps: <input style=${inputStyle} type="text" name="cook" size="15"/>
        </p>
          <button style=${formStyle}>Submit!</button>
        </p>
      </form>

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