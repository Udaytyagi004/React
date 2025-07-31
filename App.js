import React from "react";
import ReactDOM from "react-dom/client";

//creating a html tag via React
const heading = React.createElement(
  "h1",
  { id: "heading" }, //these are the attributes that goes on to the 'h1' tag
  "hello world from React"
);

// creating a nested html structure throuhg react
/*
<div id='paren'>
   <div id='children'>
     <h1></h1>
   </div> 
</div>
*/

// for crating the sibling , the third argument of the "React.createElement" => convert it into an array and pass as many childrens as you want

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "I,m a heading in nested html structre"),
    React.createElement("h1", {}, "I,m a sibling in nested html structre"),
  ])
);

// react element is just a JS object
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//react.createElement creates a react element which is actually a JavaScript object
//render function take the react element and converts it into a html tag that browser can understand and put that tag inside the div
