import React, { Component } from "react";
import { getTxtDataFromBackend } from "./mocking";
import { HelloWorld } from "./hello-world";
import Form from "./form/form";

class StatefulForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      attrs: {
        // form fields
        firstFormFieldValue: "",

        gotData: null,
        features: [],
      },
    };
  }

  async componentDidMount() {
    // fetch data from backend in order to render the component
    let res = getTxtDataFromBackend();
    if (res !== null) {
      this.setState({ attrs: { ...this.state.attrs, gotData: res } });
      this.setState({ dataLoaded: true });
    }
  }

  // -------- actions ----------
  onHandleFirstInputTextFieldChange = (e) => {
    this.setState({
      attrs: { ...this.state.attrs, firstFormFieldValue: e.target.value },
    });
  };

  onHandleFormSubmit = () => {
    console.log(this.state.attrs.firstFormFieldValue);
  };

  render() {
    const actionsStatefulForm = {
      onHandleFirstInputTextFieldChange: this.onHandleFirstInputTextFieldChange,
      onHandleFormSubmit: this.onHandleFormSubmit,
    };

    const attrsStatefulForm = this.state.attrs;

    if (!this.state.dataLoaded) {
      return <div>loading ...</div>;
    } else {
      return (
        <Form
          actionsStatefulForm={actionsStatefulForm}
          attrsStatefulForm={attrsStatefulForm}
        />
      );
    }
  }
}

export default StatefulForm;
