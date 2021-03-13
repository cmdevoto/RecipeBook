import {
    html,
    useEffect
  } from "https://unpkg.com/htm/preact/standalone.module.js";
  
  export function Header({ title, children }) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

    return html`
      <header>
        <h1 style=${mystyle}>${title}</h1>
        ${children}
      </header>
    `;
  }
  