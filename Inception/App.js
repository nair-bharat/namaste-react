const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React 2!!"
);

// we pass type, attribute /  props (these are objects), children.

console.log(heading);
// React element is a normal js object at the end of the day.
// here type of object is h1 above.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// the role of the render function is to take the heading object (react element) and create h1 tag which browser understands and put on to the DOM.

// so first we get an heading object from React.createElement.
