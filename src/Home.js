import React from "react";
import "./HomeHeader.css";
import SocialMediaIcons from "./SocialMediaIcons";
import Pdf from "./images/AllanYeznaian.pdf";
import RecruitHub from "./images/recruithub.png";

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
                <a href={Pdf} target="_blank">
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
            <div className="description">
              Hello! I am a Full-Stack Web Developer with a year of experience
              developing projects from front to back.
            </div>
            <br />
            <div className="description">
              My current toolset includes React, jQuery, C# ASP.NET, MS SQL, but
              am eager and always open to learning anything and everything
              related to programming.
            </div>
            <br />
            <hr className="line-after-description" />
            <div className="middle-text">Previous Jobs</div>
            <hr className="line-after-description" />
            <img className="Recruit-Hub-image" src={RecruitHub} />
            <div className="text-margin">
              Recruit Hub Sports is a professional online platform for high
              school athletes to be discovered by recruiting coaches from
              national colleges and universities. I helped build this app using
              React 16 and ES6. The server was built using ASP.NET Web API 2 on
              .NET Framework 4.6. WebSockets using SignalR were used to publish
              real-time updates to browser clients. Third-party authentication
              via Google was integrated usingOAuth 2. SQL Server 2017 was used
              for data storage, including the new JSON reading and writing
              functionality.
            </div>
            <br />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
