import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./glitch.css";
import { Route, withRouter } from "react-router-dom";
import Scene1 from "./Scene1";
import Home from "./Scene1";
import Troll from "./Troll";
import ButtonChase from "./ButtonChase";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Scene1} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/troll" component={Troll} />
        <Route exact path="/button" component={ButtonChase} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
