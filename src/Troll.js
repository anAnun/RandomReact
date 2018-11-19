import React from "react";
import "./Troll.css";
import troll from "./images/troll.jpg";

class Troll extends React.Component {
  state = {
    rotate: false,
    fly: false
  };
  render() {
    return (
      <React.Fragment>
        <button className="button-fake" onClick={() => this.props.enterName}>
          ( ͡° ͜ʖ ͡°)
        </button>
        <a
          className={
            !this.state.rotate ? "rotator" : this.state.fly ? "fly" : ""
          }
        >
          <img
            onClick={() => {
              this.setState({ rotate: false, fly: true });
            }}
            src={troll}
            alt=""
            id={this.state.fly ? "fly" : ""}
          />
        </a>
        <button className="submit">←Submit..</button>
      </React.Fragment>
    );
  }
}

export default Troll;
