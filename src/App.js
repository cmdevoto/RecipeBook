import {
    html,
    render
} from "https://unpkg.com/htm/preact/standalone.module.js";
  
import { Header } from "./components/Header.js";
import { Recipe } from "./components/Recipe.js";

const axios = window.axios;

function axiosTest(){
  axios.get('src/recipes.json')
    .then(function (response) {
      // handle success
      console.log(response.data);
      return response.data
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
const axiosTestResult = axiosTest(); 
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
    console.log(axios);

    return html`
      <${Header} title="RecipeList">
        Welcome to your recipe booklet
      </${Header}>
      <${Recipe} name="focaccia" ingredients="water" steps="stir" imgPath="../public/images/focaccia.JPG">
      </${Recipe}>
    `;
  }
  
  render(html` <${App} /> `, document.getElementById("app"));
  