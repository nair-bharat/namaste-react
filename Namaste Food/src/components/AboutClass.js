import React from "react";
import Profile from "./Profile";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Class constructor");
  }
  componentDidMount() {
    console.log("Parent Class componentDidMount");
  }
  render() {
    console.log("Parent Class render");
    return (
      <div>
        <Profile name={"Bharat"} location={"Mumbai"} />
        <Profile name={"Bhavya"} location={"Bangalore"} />
        <Profile name={"Alex"} location={"Kerala"} />
      </div>
    );
  }
}

export default AboutClass;
