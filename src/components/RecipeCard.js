import {
    html
  } from "https://unpkg.com/htm/preact/standalone.module.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// this is currently not being used
// would like to use this in the next feature -- syntax is from react-boostrap
// ideally these cards will appear on the home page with the option to view the full recipe for each card

  export function RecipeCard( {name, description, img} ){
    return html`
        <${Card} style={{ width: '18rem' }}>
        <${Card}.Img variant="top" src=${img} />
        <${Card}.Body>
            <${Card}.Title>${name}</${Card}.Title>
            <${Card}.Text>${description}</${Card}.Text>
            <${Button} variant="primary">Go To Recipe</${Button}>
        </${Card}.Body>
        </${Card}>
    `;
  }