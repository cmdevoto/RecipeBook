import {
    html,
    useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

// Recipe Component -- the picture, recipe, ingredients, steps
// in the future, we'd like to have just the picture and the name with a button to go to that recipe page

export function Recipe( {name, ingredients, steps, imgPath} ) {
    const recipeList = {
        fontSize: "15px"
    };
    const ingredientStyle = {
        fontSize: "15px",
        fontFamily: "Arial",
        border: '1px solid #1a202c' 
    };
    const stepStyle = {
        fontSize: "15px",
        fontFamily: "Arial", 
        border: '1px solid #1a202c'
    };
    
    return html`
        <img class="img" src=${imgPath} alt=${name} title=${name} width="500" height="300" />
        <h1>${name}</h1>
        <p>Ingredients</p>
        <ul style=${ingredientStyle}>${ingredients}</ul>
        <p>Steps</p>
        <ol style=${stepStyle}>${steps}</ol>
    `;
  }