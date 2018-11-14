import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import Troll from "./Troll";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Scene1} />
        <Route exact path="/scene2" component={Scene2} />
        <Route exact path="/troll" component={Troll} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
