import React from "react";
import "./Troll.css";
import troll from "./images/troll.jpg";

class Troll extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.animate} class="col-md-2">
          KNOCK KNOCK
        </button>
        <button onClick={() => this.bye} class="hidden col-md-2">
          ( ͡° ͜ʖ ͡°)K BYEEE
        </button>
        <a id="rotator">
          <img src={troll} />
        </a>
      </React.Fragment>
    );
  }
}

export default Troll;
