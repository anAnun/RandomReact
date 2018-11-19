import React from "react";
import Troll from "./Troll";

class Scene1 extends React.Component {
  state = {
    name: "",
    nameAfter: "",
    submitted: false
  };

  continue = () => {
    this.props.history.push("home");
  };

  enterName = name => {
    this.setState({
      nameAfter: name,
      submitted: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="App body">
          <header
            className={
              !this.state.nameAfter ? "App-header" : "App-header tv-static"
            }
          >
            {this.state.nameAfter && (
              <div className="continue">
                Click{" "}
                <button className="continue-button" onClick={this.continue}>
                  {" "}
                  HERE{" "}
                </button>{" "}
                to continue.....
              </div>
            )}
          </header>

          {this.state.nameAfter ? (
            <div>
              <h1 className="glitch" data-text="Welcome ">
                Welcome
              </h1>
              <br />
              <h1 className="glitch2" data-text={this.state.nameAfter} />
              <div className="text-info">
                Hello {this.state.nameAfter}, welcome to my website!
              </div>
              <br />
              <div className="text-info">
                Here you can see some of my work and resume!
              </div>
            </div>
          ) : (
            <h1 className="glitch" data-text="Welcome!">
              Welcome!
            </h1>
          )}
        </div>
        {!this.state.submitted && (
          <div>
            <div className="screenText">Please tell us your name.....</div>
            <input
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              className="input"
            />
            {this.state.name && (
              <div>
                <Troll />
                <br />
              </div>
            )}
          </div>
        )}
        {this.state.name && (
          <button
            className="button"
            onClick={() => this.enterName(this.state.name)}
          >
            ( ͡° ͜ʖ ͡°)
          </button>
        )}
      </React.Fragment>
    );
  }
}

export default Scene1;
