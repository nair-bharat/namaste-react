import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading1" },
  "This is heading 1 of h1"
);

const heading1 = (
  <h1 className="head" tabIndex={1}>
    This is from heading 1 of JSX
  </h1>
);
// React Functional component

const HeadingFunctional = () => {
  return (
    <>
      {heading1}
      <h1>This returns JSX</h1>
    </>
  );
};

const Title = () => <h1>This is coming from title component</h1>;
const HeadingFunctional2 = () => {
  return (
    <>
      <Title />
      <h1> This is functional component 2 </h1>
    </>
  );
};

const title2 = (
  <div>
    <h1>This is title 2</h1>
    <HeadingFunctional2 />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading1);

// root.render(<HeadingFunctional2 />);

root.render(title2);
