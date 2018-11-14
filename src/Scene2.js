import React from "react";

class Scene2 extends React.Component {
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
        <div className={!this.state.continue ? "image2" : "tv-static"}>
          asdf
          <div className={!this.state.continue ? "image1" : "tv-static"}>
            <button className="continue-button-center" onClick={this.continue}>
              Enter...
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Scene2;
