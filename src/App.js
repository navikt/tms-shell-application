import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { minSideUrl } from "./urls";

const MinSide = React.lazy(() =>
  import(minSideUrl)
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
        <Route path="/min-side" exact render={() => renderMicrofrontend(MinSide)} />
      </Switch>
    </Router>
  );
};

export default App;
