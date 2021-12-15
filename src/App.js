import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

const MinSide = React.lazy(() =>
  import("http://localhost:7100/build/dist/index.js")
);

const renderMicrofrontend = (Microfrontend) => {
  return (
    <React.Suspense fallback="Loading...">
      <Microfrontend />
    </React.Suspense>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => renderMicrofrontend(MinSide)} />
      </Switch>
    </Router>
  );
};

export default App;
