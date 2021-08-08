import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Header from "./components/header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./styles/main.scss";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/*" component={App} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root"),
);
