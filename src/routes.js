import React from "react";
import Dashboard from "./containers/app/home.container";
import NewPoll from "./containers/app/newpoll.container";
import PollLists from "./containers/app/votingpoll.container";
import NotFoundPage from "./components/notfound/notfound.component.js";
import { Switch, Route } from "react-router-dom";
import App from "./containers/app.container";
export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/notfound" component={NotFoundPage} />
      <Dashboard>
        <Route path="/newpoll" component={NewPoll} />
        <Route path="/polllists" component={PollLists} />
      </Dashboard>
    </Switch>
  );
}
