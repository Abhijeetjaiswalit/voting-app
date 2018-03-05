import React, { Component } from "react";
import Header from "../../components/header/header.component";
import Login from "../../components/login/login.component";
class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
      </div>
    );
  }
}

export default HomeContainer;
