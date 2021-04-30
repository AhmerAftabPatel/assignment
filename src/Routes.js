import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import setAxiosDefaultHeaders from "./constant";
import Home from "./pages/Home";
// import 'semantic-ui-css/semantic.min.css'
/**
 * @author
 * @function Routes
 **/

const Routes = props => {
  useEffect(() => {
    setAxiosDefaultHeaders();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        {setAxiosDefaultHeaders()}
        <Route path="/" exact component={App} />
        <Route path="/hackernews" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
