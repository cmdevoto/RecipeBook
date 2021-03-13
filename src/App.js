import {
    html,
    render,
    useState,
    useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";
  
import { Header } from "./components/Header.js";
import { Recipe } from "./components/Recipe.js";

/*
function getRecipes(){
  const axios = window.axios;
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
}*/

//this version of getRecipes returns a 'promise' not JSON object
export function getRecipes() {
  const axios = window.axios;
  return axios.get('src/recipes.json').then((response) => {
    return response.data.data;
  });
}
console.log("Get Recipe return")
const testVar = console.log(getRecipes())

  function App() { 
    //create 2 recipe arrays and add them to the state using the useState hook
    //const [recipes, setRecipes] = useState({name: 'test', ingredients: 'test', steps:'test', notes:'test', imgPath:'test' });  
    const [recipes, setRecipes] = useState({})
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
  