import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.less"

const startMockWorker = async () => {
  const mock = await import("./mocks/browser");
  await mock.worker.start();
};

if (process.env.NODE_ENV === "development") {
  startMockWorker();
}

ReactDOM.render(<App />, document.getElementById("app"));
