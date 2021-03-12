import {
    html,
    render,
    useEffect
  } from "https://unpkg.com/htm/preact/standalone.module.js";
import Cards from "react-bootstrap/Cards";
import Button from "react-bootstrap/Button";


  export function RecipeCard( {name, description, img} ){
    return html`
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src=${img} />
        <Card.Body>
            <Card.Title>${name}</Card.Title>
            <Card.Text>${description}</Card.Text>
            <Button variant="primary">Go To Recipe</Button>
        </Card.Body>
        </Card>
    `;
  }