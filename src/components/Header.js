import {
    html,
    useEffect
  } from "https://unpkg.com/htm/preact/standalone.module.js";

import { Nav } from "./Nav.js";
  
  export function Header({ title }) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  
    // css styling for the header

    const mystyle = {
        color: "#6150FF",
        padding: "10px",
        fontFamily: "Lobster",
        textAlign: "center"
      };

    // returning the html with inline css
    // the fas fa-seedling is the seedling icon -- from fontawesome (index.html)
    // nav bar is included in the header (they will always appear together)
    
    return html`
      <header>
        <h1 style=${mystyle}>${title} <i class="fas fa-seedling"></i></h1>
        <${Nav}> </${Nav}>
      </header>
    `;
  }
  