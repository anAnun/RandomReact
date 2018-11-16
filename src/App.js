import React, { Component } from "react";
import "./App.css";
import "./glitch.css";
import { Route, withRouter } from "react-router-dom";
import Scene1 from "./Scene1";
import Home from "./Home";
import Resume from "./Resume";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Scene1} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/resume" component={Resume} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
