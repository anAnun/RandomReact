import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import Scene1 from "./Scene1";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/scene1" component={Scene1} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
