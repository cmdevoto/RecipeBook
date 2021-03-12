import {
    html,
    render
} from "https://unpkg.com/htm/preact/standalone.module.js";
  
import { Header } from "./components/Header.js";
import { Recipe } from "./components/Recipe.js";
//import axios from "axios";
  
// use axios to do get request on json
// json file served through a class with axios in it

/*
const LearnService = () => {
    let url = '';
    const createRecipe = () => {
        return axios({
            method: 'get',
            url: "recipes.json",
            data:{
                id,
                name,
                ingredients,
                steps,
                notes,
                type,
                imgPath
            }
        })
    }
};

export default LearnService
*/

// nav bar (with or without destinations)

// create recipe list component

  function App() { 
    return html`
      <${Header} title="RecipeList">
        Welcome to your recipe booklet
      </${Header}>
      <${Recipe} name="focaccia" ingredients="water" steps="stir" imgPath="../public/images/focaccia.JPG">
      </${Recipe}>
    `;
  }
  
  render(html` <${App} /> `, document.getElementById("app"));
  