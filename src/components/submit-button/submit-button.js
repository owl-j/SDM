import React, { Component } from "react";

class SubmitButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button onClick={this.props.actionsStatefulForm.onHandleFormSubmit}>
        submit
      </button>
    );
  }
}

export default SubmitButton;
