/*
<div>
    <div>
        <h1>This is some text</h1>
    </div>
</div>
*/

// 2nd

/*
<div id="parent">
    <div id="child">
        <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>
    </div>
</div>
*/

/*
const heading = React.createElement("h1", {}, "This is some text from React");
const container = React.createElement("div", { id: "container" }, heading);
*/

const container = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("div", { key: "heading1" }, "This is an h1 tag"),
    React.createElement("div", { key: "heading2" }, "This is an h2 tag"),
  ])
);

console.log(container);

console.log(container.props.children);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
