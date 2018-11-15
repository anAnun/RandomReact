import React from "react";
import "./HomeHeader.css";

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
        <div className="fade-in">
          <div className="Home-content-name">
            <div className="Home-header">
              <div className="home-header-text">
                Allan Yeznaian
                <hr className="line" />
              </div>
              <button className="Home-nav-buttons">
                <span>Intro</span>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
