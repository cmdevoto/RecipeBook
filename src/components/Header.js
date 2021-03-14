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
        backgroundColor: 'rgb(' +163 + ',' + 192 + ',' + 230 + ')',
        padding: "10px",
        fontFamily: "Georgia, serif",
        letterSpacing: "5px"
      };

    return html`
      <header>
        <h1 style=${mystyle}>${title}</h1>
        ${children}
      </header>
    `;
  }
  