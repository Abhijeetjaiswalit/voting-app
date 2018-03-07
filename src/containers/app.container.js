import React, { Component } from "react";
import { Routes } from "../routes";
import { Route, Redirect } from "react-router-dom";
import History from "../History";
import Header from "../components/header/header.component";
import SignIn from "../components/login/login.component";
let loggedIn = localStorage.getItem("user");

loggedIn ? History.replace("/newpoll") : History.replace("/");
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route
          path="/sign-in"
          render={() => (loggedIn ? <Redirect to="/newpoll" /> : <SignIn />)}
        />
        <Routes />
      </div>
    );
  }
}

export default App;
