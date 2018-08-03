import React from "react";

class Scene1 extends React.Component {
  state = {
    name: "",
    nameAfter: "",
    submitted: false
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
        <div className="App">
          <header className="App-header">
            {this.state.nameAfter && (
              <div className="continue">
                Click <button className="continue-button"> HERE </button> to
                continue.....
              </div>
            )}
          </header>
          {this.state.nameAfter ? (
            <div>
              <h1 className="glitch2" data-text="Welcome ">
                Welcome
              </h1>
              <br />
              <h1 className="glitch2" data-text={this.state.nameAfter} />
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
            <br />
            <br />
            <br />
            <br />
            <input
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              className="input"
            />
            {this.state.name && (
              <div>
                <br />
                <button
                  className="submit"
                  onClick={() => this.enterName(this.state.name)}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Scene1;
