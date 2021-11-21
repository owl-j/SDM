import React from "react";
import ReactDOM from "react-dom";
import { HelloWorld } from "./components/hello-world";
import StatefulForm from "./components/stateful-form";
import FormField from "./components/form-field/form-field";

function App() {
  return (
    <div>
      <StatefulForm />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
