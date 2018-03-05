import React, { Component } from "react";
import { Routes } from "../routes";
class App extends Component {
  componentDidMount() {
    console.log("test");
  }
  render() {
    let test = this.props;
    console.log(test);
    return (
      <div>
        <Routes />
        {this.props.children}
      </div>
    );
  }
}

export default App;
