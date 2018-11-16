import React from "react";
import "./HomeHeader.css";
import SocialMediaIcons from "./SocialMediaIcons";

class Home extends React.Component {
  state = {
    continue: false
  };

  contact = () => {};

  continue = () => {
    this.props.history.push("/");
  };

  resume = () => {
    this.props.history.push("/resume");
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
                <a href="./images/AllanYeznaian.pdf" target="_blank">
                  <button className="Home-nav-buttons-after">
                    <span>Resume</span>
                  </button>
                </a>
                <button
                  className="Home-nav-buttons-after"
                  onClick={() => this.contact()}
                >
                  <span>Contact</span>
                </button>

                <hr className="line-2" />
              </div>
            </div>
            <SocialMediaIcons />
            <div className="description">hello i am a developer</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
