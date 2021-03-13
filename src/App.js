import {
    html,
    render,
    useState,
    useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";
  
import { Header } from "./components/Header.js";
import { Recipe } from "./components/Recipe.js";

//const axios = window.axios;


function getRecipes(){
  axios.get('src/recipes.json')
    .then(function (response) {
      // handle success
      console.log(response.data);
      return response.data.data
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });;
}

console.log("test")
//const axiosTestResult = getRecipes(); 

// create recipe list component

  function App() { 
    //create 2 recipe arrays and add them to the state using the useState hook
    const [recipes, setRecipes] = useState([]);  

    // the useEffect hook is used here to load user data asynchronously
    useEffect(() => {
      return getRecipes().then(function (data) {
          setRecipes(data);
        });
    });



    return html`
      <${Header} title="RecipeList">
        Welcome to your recipe booklet
      </${Header}>
      <${Recipe} name="focaccia" ingredients="water" steps="stir" imgPath="../public/images/focaccia.JPG">
      </${Recipe}>
      <ul>
      ${recipes.map(
        (recipe) =>
          html` <li key="${user}">
            ${recipe.name} | ${recipe.ingredients} ${recipe.steps}
          </li>`
      )}
      </ul>
    `;
  }
  
  render(html` <${App} /> `, document.getElementById("app"));
  