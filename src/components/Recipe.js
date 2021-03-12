import {
    html,
    useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";


export function Recipe({name, ingredients, steps, imgPath}) {
    return html`
        <div
            <img class="img" src=${imgPath} alt=${name} title=${name} width="300" height="100" />
            <h1>${name}</h1>
            <p>Ingredients</p>
            <ul>${ingredients}</ul>
            <p>Steps</p>
            <ol>${steps}</ol>
        </div>
    `;
  }