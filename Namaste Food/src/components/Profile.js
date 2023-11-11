import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 26,
      hobbies: "Trekking",
    };
    console.log(this.props.name + " Child Class constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " Child componentDidMount");
  }

  render() {
    console.log(this.props.name + " Child render is called");
    const { name, location, count } = this.props;
    // now no need to write this.props.name as we have extracted it.

    const { hobbies } = this.state;
    return (
      <div>
        <h1>
          {name}, {this.state.count}
        </h1>
        <h2>{location}</h2>
        <h3>{hobbies}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment Count
        </button>
      </div>
    );
  }
}

export default Profile;
