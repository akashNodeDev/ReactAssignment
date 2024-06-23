// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React!"
// );
// console.log(heading);//object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 * Creating the nested html structure
 * <div id="parent">
 *  <div id="child">
 *     <h1> Hello I am h1 tag </h1>
 *  </div>
 * </div>
 * ReactElement(object)=> HTML (Browser understands when DOM is rendered)
 */

const parent = React.createElement("div",{id:'parent'},
    React.createElement("div",{id:'child'},
        React.createElement("h1",{},"Hello I am inside h1 tag")
    )
);

console.log(parent);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
