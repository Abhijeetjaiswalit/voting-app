import React from "react";
import HomePage from "./containers/app/home.container";
import NewPoll from "./containers/app/newpoll.container";
import PollLists from "./containers/app/votingpoll.container";
import NotFoundPage from "./components/notfound/notfound.component.js";
import { Switch, Route } from "react-router-dom";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/notfound" component={NotFoundPage} />
      <Route path="/newpoll" component={NewPoll} />
      <Route path="/polllists" component={PollLists} />
    </Switch>
  );
}
