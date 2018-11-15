import React from "react";
import HomeHeader from "./HomeHeader";

class Home extends React.Component {
  state = {
    continue: false
  };

  continue = () => {
    this.setState({
      continue: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <div className="fade-in" />
      </React.Fragment>
    );
  }
}

export default Home;
