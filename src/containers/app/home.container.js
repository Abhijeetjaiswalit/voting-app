import React, { Component } from "react";
import Login from "../../components/login/login.component";
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default HomeContainer;
