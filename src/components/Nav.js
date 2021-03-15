import {
    html
} from "https://unpkg.com/htm/preact/standalone.module.js";

// Nav is the parent component for child Header

import { Header } from "./Header.js";

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
    // includes the header for the webpage
    
    return html `
        <header>
            <${Header} title="My Recipe Book"> 
            Welcome to your recipe booklet
            </${Header}>
            <ul style=${navStyle}>
                <li style=${navStyle2}> <a href="../../index.html">Back to Homepage</a> </li>
            </ul>
    </header>
    `
}