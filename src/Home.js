import React from "react";
import "./HomeHeader.css";

class Home extends React.Component {
  state = {
    continue: false
  };

  continue = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <React.Fragment>
        <div className="Home-container">
          {" "}
          <div className="fade-in">
            <div className="Home-content-name">
              <div className="Home-header">
                <div className="home-header-text">
                  Allan Yeznaian
                  <hr className="line" />
                </div>
                <button
                  className="Home-nav-buttons"
                  onClick={() => this.continue()}
                >
                  <span>Intro</span>
                </button>
                <hr className="line-2" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
