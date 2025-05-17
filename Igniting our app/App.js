import React from "react";
import ReactDOM from "react-dom/client";

const parent= React.createElement('div', {id:"parent"}, [
    React.createElement('div', {id:"child",  key:"1"}, [
        React.createElement('h1', {}, "I'm h1 tag!"),
        React.createElement('h2', {}, "I'm h2 tag!"),
    ]),
    React.createElement('div', {id:"child2", key:"2"}, [
        React.createElement('h1', {}, "I'm h1 tag!"),
        React.createElement('h2', {}, "I'm h2 tag!"),
    ]),
]);

console.log(parent)//this returns a object and not an html tah as heading is still an react object which becomes a tag after we apply the root .render method that takes the object and convets it into a tag understandable by the browser.

const root = ReactDOM.createRoot(document.getElementById("root"));   

root.render(parent);
