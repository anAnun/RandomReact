import React from "react";
import "./ButtonChase.css";

class ButtonChase extends React.Component {
  state = {
    text: ""
  };

  componentDidUpdate = () => {
    const array = [];
    array.push(this.state.text);
    this.setState({
      arr: array
    });
    console.log(array);
  };

  render() {
    return (
      <React.Fragment>
        <div className="chase-fadout">
          <div className="chase-animation">
            <label className="chase-label">Please type something: </label>
            <input
              className="chase-input"
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ButtonChase;
