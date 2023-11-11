import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "Joe Smith",
      location: "California",
      avatar:
        "data:image/jpeg;base64,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",
    };
  }

  async componentDidMount() {
    console.log("compenentDidMount");
    const data = await fetch("https://api.github.com/users/nair-bharat");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json.name,
      location: json.location,
      avatar: json.avatar_url,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    // we are using setState and updating the DOM, so now the above line will be console logged on to the screen.
  }

  componentWillUnmount() {
    console.log("ProfileClass component unmounted");
    // removing compoennt from UI, if we navigate to some other component then the above line will be console logged.
  }

  render() {
    debugger;
    const { name, location, count } = this.props;
    // now no need to write this.props.name as we have extracted it.

    const { hobbies } = this.state;
    return (
      <div>
        <h1>
          {name}, {this.state.count}
        </h1>
        <h2>{this.state.userInfo}</h2>
        <h3>{this.state.location}</h3>
        <img src={this.state.avatar} alt="avatar-url" />
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

export default ProfileClass;
