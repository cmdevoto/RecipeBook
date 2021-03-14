import {
    html,
    useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

// Recipe Component -- the picture, recipe, ingredients, steps
// in the future, we'd like to have just the picture and the name with a button to go to that recipe page

export function Recipe( {name, ingredients, steps, imgPath} ) {
    
    // css styling for all recipe components
    
    const imgStyle = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        border: "3px solid #6150FF",
        borderRadius: "10px"
    }
    const nameStyle = {
        fontFamily: "Lobster",
        textAlign: "center",
        fontSize: "40px"
    }

    const ingredientStyle = {
        fontSize: "15px",
        fontFamily: "Nunito",
        border: '1px solid #1a202c' 
    };
    const stepStyle = {
        fontSize: "15px",
        fontFamily: "Nunito", 
        border: '1px solid #1a202c'
    };
    
    const subHeadingStyle = {
        fontFamily: "Lobster",
        fontSize: "20px"
    }

    // returning the html with inline css

    return html`
        <h1 style=${nameStyle}>${name}</h1>
        <img style=${imgStyle} src=${imgPath} alt=${name} title=${name} width="500" height="300" />
        <p style=${subHeadingStyle}>Ingredients</p>
        <ul style=${ingredientStyle}>${ingredients}</ul>
        <p style=${subHeadingStyle}>Steps</p>
        <ol style=${stepStyle}>${steps}</ol>
    `;
  }