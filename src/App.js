import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

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
        <Route path="/" render={() => renderMicrofrontend(() => <p>MicroFrontend</p>)} />
      </Switch>
    </Router>
  );
};

export default App;
