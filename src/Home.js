import React from "react";
import "./HomeHeader.css";
import SocialMediaIcons from "./SocialMediaIcons";
import Pdf from "./images/AllanYeznaian.pdf";
import image1 from "./images/Slider1.jpg";
import image2 from "./images/Slider2.jpg";
import RecruitHub from "./images/recruithub.png";

class Home extends React.Component {
  state = {
    continue: false,
    showModal: false,
    lolz1: false
  };

  contact = () => {
    this.setState({
      showModal: true
    });
  };

  continue = () => {
    this.props.history.push("/");
  };

  lolz = () => {
    this.setState({ lolz1: true });
  };

  resume = () => {
    this.props.history.push("/resume");
  };

  render() {
    return (
      <React.Fragment>
        {this.state.showModal && (
          <div className="modal-background">
            <div className="modal-border">
              <div className="modal">
                <button
                  className="modal-close"
                  onClick={() =>
                    this.setState({
                      showModal: false
                    })
                  }
                >
                  X
                </button>
                Please feel free to email me at{" "}
                <a href="allanyeznaian@gmail.com">allanyeznaian@gmail.com</a>{" "}
                about any inquiries.
                <br />
                You can also connect with me via{" "}
                <a href="https://www.linkedin.com/in/allan-yeznaian/">
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="container-css">
          {" "}
          <div className="fade-in">
            {" "}
            {this.state.lolz1 && (
              <div>
                <label> Type Something</label>{" "}
                <input onChange={() => this.lolz1} />
              </div>
            )}
            {/* {this.state.showModal && (
              <div className="modal-background">
                <div className="modal">
                  <button
                    className="modal-close"
                    onClick={() =>
                      this.setState({
                        showModal: false
                      })
                    }
                  >
                    X
                  </button>
                  Please feel free to email me at{" "}
                  <a href="allanyeznaian@gmail.com">allanyeznaian@gmail.com</a>{" "}
                  about any inquiries.
                  <br />
                  You can also connect with me via{" "}
                  <a href="https://www.linkedin.com/in/allan-yeznaian/">
                    Linkedin
                  </a>
                </div>
              </div>
            )} */}
            <div className="Home-content-name">
              <div className="Home-header">
                <div className="home-header-text">
                  Allan Yeznaian
                  <hr className={!this.state.showModal && "line"} />
                </div>
                <div className="buttons-line-container">
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
                  <button
                    className="Home-nav-buttons-after"
                    onClick={() => this.lolz()}
                  >
                    <span>Lolz</span>
                  </button>

                  <hr className={!this.state.showModal && "line-2"} />
                </div>
              </div>
            </div>
            <br />
            <SocialMediaIcons />
            <div className="block-container">
              <div className="description block1">
                Hello! I am a Full-Stack Web Developer based out of Los Angeles
                with a solid year of experience developing projects from front
                to back.
              </div>
              <br />
              <div className="description block2">
                My current toolset includes React, jQuery, C# ASP.NET, MS SQL,
                but am eager and always open to learning anything and everything
                related to programming.
              </div>
            </div>
            <br />
            <div className="container-slideshow margin">
              <section className="slideshow">
                <div className="slideshow-container slide">
                  <div className="slider1-css">
                    <img alt="" src={image1} className="auto-size" />
                    <img alt="" src={image2} className="img1 auto-size" />
                  </div>
                </div>
              </section>
              <hr className="line-after-description" />
              <div className="middle-text">Previous Jobs and Projects</div>
              <hr className="line-after-description" />
              <a className="content-1" href="https://www.recruithubsports.com/">
                <img className="Recruit-Hub-image" src={RecruitHub} alt="" />
              </a>
              <div className="text-margin content-2">
                Recruit Hub Sports is a professional online platform for high
                school athletes to be discovered by recruiting coaches from
                national colleges and universities. I helped build this app
                using React 16 and ES6. The server was built using ASP.NET Web
                API 2 on .NET Framework 4.6. WebSockets using SignalR were used
                to publish real-time updates to browser clients. Third-party
                authentication via Google was integrated usingOAuth 2. SQL
                Server 2017 was used for data storage, including the new JSON
                reading and writing functionality.
              </div>
              <br />
              <hr className="line-after-description" />
              <a href="https://github.com/anAnun/SongWritersLibrary">
                <div className="block">
                  <div className="content-1 music">Song Writer Library</div>
                </div>
              </a>
              <div className="music-description">
                Song Writer Library is an ongoing personal project of mine that
                allows musicians and songwriters to organize their thoughts and
                work. The user can enter a song name with lyrics, descriptions,
                and audio files that play directly on the dom. It is a work in
                progress being built on React, ASP.NET, and SQL Server.
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
