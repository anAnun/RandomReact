import React from "react";
import "./HomeHeader.css";

class HomeHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home-header">
          <div className="home-header-text">
            Allan Yeznaian
            <hr className="line" />
          </div>
          <button className="Home-nav-buttons">Intro</button>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeHeader;
