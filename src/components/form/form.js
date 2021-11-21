import React, { Component } from "react";
import FormField from "../form-field/form-field";
import SubmitButton from "../submit-button/submit-button";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <FormField
          actionsStatefulForm={this.props.actionsStatefulForm}
          attrsStatefulForm={this.props.attrsStatefulForm}
        />
        <SubmitButton actionsStatefulForm={this.props.actionsStatefulForm} />
      </div>
    );
  }
}

export default Form;
