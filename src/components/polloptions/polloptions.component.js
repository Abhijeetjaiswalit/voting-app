import React, { Component } from "react";

class PollOptionsComponent extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control"
        name={`option-${this.props.index}-option`}
        onChange={this.props.onChange}
      />
    );
  }
}

export default PollOptionsComponent;
