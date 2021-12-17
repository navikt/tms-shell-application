import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import isDevelopment from "./lib/is-development";

if (isDevelopment()) {
  const { worker } = require('./mocks/browser')
  worker.start()
}

ReactDOM.render(<App />, document.getElementById("app"));
