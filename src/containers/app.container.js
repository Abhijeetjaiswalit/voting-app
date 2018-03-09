import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./app/home.container";
import Login from "../components/login/login.component";
import NewPoll from "./app/newpoll.container";
import PollLists from "./app/votingpoll.container";
// let loggedIn = localStorage.getItem("user");
// loggedIn ? History.replace("/polllists") : History.replace("/");
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Dashboard>
            <Route path="/newpoll" component={NewPoll} />
            <Route path="/polllists" component={PollLists} />
          </Dashboard>
        </Switch>
        {/* <Route
          path="/"
          render={() => (loggedIn ? <Redirect to="/polllists" /> : <SignIn />)}
        /> */}
        {/* <Routes /> */}
      </div>
    );
  }
}

export default App;
