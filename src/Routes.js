import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
// import 'semantic-ui-css/semantic.min.css'
/**
 * @author
 * @function Routes
 **/

const Routes = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/hackernews" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
