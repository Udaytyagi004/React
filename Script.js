// more complex nested structre of html

/*
<div id='paren'>
   <div id='children-1'>
     <h1></h1>
     <h2></h2>
   </div> 
    <div id='children-2'>
     <h1></h1>
     <h2></h2>
   </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children-1" }, [
    React.createElement(
      "h1",
      {},
      "I,m a heading in nested html structre | child 1"
    ),
    React.createElement("h1", {}, "I,m a sibling in nested html structre"),
  ]),
  React.createElement("div", { id: "children-2" }, [
    React.createElement(
      "h1",
      {},
      "I,m a heading in nested html structre child-2"
    ),
    React.createElement("h1", {}, "I,m a sibling in nested html structre"),
  ]),
]);
