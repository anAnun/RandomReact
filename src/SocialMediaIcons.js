import React from "react";
import "./SocialMediaIcons.css";

class SocialMediaIcons extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="marg-icon">
          <div className="icon-wrapper">
            <a href="https://github.com/anAnun">
              <i class="fa fa-github" />
            </a>
            <br />
            <a href="https://www.linkedin.com/in/allan-yeznaian/">
              <i className="fa fa-linkedin-square" />
            </a>

            <br />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SocialMediaIcons;
