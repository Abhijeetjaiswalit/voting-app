import React, { Component } from "react";
import { Routes } from "../routes";
import { Route, Redirect } from "react-router-dom";
import History from "../History";
import Header from "../components/header/header.component";
import SignIn from "../components/login/login.component";
let loggedIn = localStorage.getItem("user");

loggedIn ? History.replace("/polllists") : History.replace("/");
class App extends Component {
  render() {
    return (
      <div>
        <Header key={this.props.key}/>
        <Route
          path="/sign-in"
          render={() => (loggedIn ? <Redirect to="/polllists" /> : <SignIn />)}
        />
        <Routes />
      </div>
    );
  }
}

export default App;
