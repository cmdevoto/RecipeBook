import {
    html,
    useEffect
  } from "https://unpkg.com/htm/preact/standalone.module.js";

import { Nav } from "./Nav.js";
  
  export function Header({ title }) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  
    const mystyle = {
        color: "#6150FF",
        padding: "10px",
        fontFamily: "Lobster",
        textAlign: "center"
      };

    return html`
      <header>
        <h1 style=${mystyle}>${title} <i class="fas fa-seedling"></i></h1>
        <${Nav}> </${Nav}>
      </header>
    `;
  }
  