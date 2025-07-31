# what parcel does

i. Dev Build
ii. Local Server and host our app onto it
iii. HMR[HOT MODULE REPLACEMENT] auto refresh the page
iv. it uses a file watching algo written in c++
it keeps the track of our project as we save it ,parcel build it again

######

//creating a html tag via React
const heading = React.createElement(
"h1",
{ id: "heading" }, //these are the attributes that goes on to the 'h1' tag
"hello world from React"
);

// creating a nested html structure throuhg react
/\*

<div id='parent'>
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

# functional component

const HeadingComp = () => {
return <h1>This is a Functional Component</h1>;
};

# fetch data from an live API

useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {
const data = await fetch();
};
const jsonData = await data.json()

# router

to develop route we have to develop "routing Configuration"
for Routing Configuration we use "createBrowserRouter"
createBrowserRouter => takes list of objects
