/*
<div id="parent">
    <div id="child1">
        <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>
    </div>
    <div id="child2">
        <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { key: "child1", id: "child1" }, [
    React.createElement("div", { key: "h1" }, "This is h1 tag"),
    React.createElement("div", { key: "h2" }, "This is h2 tag"),
  ]),
  React.createElement("div", { key: "child2", id: "child2" }, [
    React.createElement("div", { key: "h1" }, "This is h1 tag"),
    React.createElement("div", { key: "h2" }, "This is h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
