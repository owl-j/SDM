import React, { Component } from "react";

class FormField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>first text input</div>
        <input
          type="text"
          onChange={
            this.props.actionsStatefulForm.onHandleFirstInputTextFieldChange
          }
        />
      </div>
    );
  }
}

export default FormField;
