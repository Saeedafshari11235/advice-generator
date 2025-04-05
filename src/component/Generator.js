import React, { Component } from "react";
import "./generator.css";

export default class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: "https://api.adviceslip.com/advice",
      advice: "need Advice? Click here",
    };

    this.getAdviceHandler = this.getAdviceHandler.bind(this);
  }

  getAdviceHandler() {
    fetch(this.state.URL)
      .then((respone) => {
        return respone.json();
      })
      .then((response) => {
        this.setState({ advice: response.slip.advice });
      });
  }

  render() {
    return (
      <div className="advice-container">
        <div className="advice" onClick={this.getAdviceHandler}>{this.state.advice}</div>
      </div>
    );
  }
}
