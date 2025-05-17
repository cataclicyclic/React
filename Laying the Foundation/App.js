import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ⇒ creates Object ⇒ when rendered on server(localhost) ⇒ HTML element

const heading = React.createElement("h1" , {} , "React is Rendered");

//React Element
const jsxheading = <h1 className="head">This is React using JSX</h1>

// functional component
const Title= () => (
    <h1>Welcome to React</h1>
);
const HeadingComponent = () => (
    <div id="container">
        <Title /> 
        {jsxheading}
        <h1 className="header"> This is a react functional Component </h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(jsxheading);
root.render(<HeadingComponent/>);