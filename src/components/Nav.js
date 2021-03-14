import {
    html
} from "https://unpkg.com/htm/preact/standalone.module.js";

export function Nav(){

    // css styling
    const navStyle = {
        display: "flex",
        flexFlow: "row wrap",
        listStyle: "none",
        margin: "1",
        background: "#6150FF"
    }

    const navStyle2 = {
        display: "block",
        padding: "1em",
        color: "white",
        fontFamily: "Nunito"
    }

    // currently only have "back to homepage" -- refers to index.html
    // will add other nav options in future features
    
    return html `
        <ul style=${navStyle}>
            <li style=${navStyle2}> <a href="../../index.html">Back to Homepage</a> </li>
        </ul>
    `
}