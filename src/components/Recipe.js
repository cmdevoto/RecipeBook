import {
    html,
    useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

// Recipe Component -- the picture, recipe, ingredients, steps
// in the future, we'd like to have just the picture and the name with a button to go to that recipe page
export function Recipe( {name, ingredients, steps, imgPath} ) {
    return html`
        <img class="img" src=${imgPath} alt=${name} title=${name} width="500" height="300" />
        <h1>${name}</h1>
        <p>Ingredients</p>
        <ul>${ingredients}</ul>
        <p>Steps</p>
        <ol>${steps}</ol>
    `;
  }