const heading = React.createElement(
    "h1",
    {id:"heading", },
    "hello from react!"
);

console.log(parent)//this returns a object and not an html tah as heading is still an react object which becomes a tag after we apply the root .render method that takes the object and convets it into a tag understandable by the browser.

const root = ReactDOM.createRoot(document.getElementById("root"));   

root.render(parent);
