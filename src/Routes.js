import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MissingPage from "./components/Messages.js/MissingPage";
import setAxiosDefaultHeaders from "./constant";
import Home from "./pages/Home";
// import 'semantic-ui-css/semantic.min.css'
/**
 * @author
 * @function Routes
 **/

const Routes = props => {
  //setting up default axios headers and base url
  useEffect(() => {
    setAxiosDefaultHeaders();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        {setAxiosDefaultHeaders()}
        <Route path="/" exact component={Home} />
        <Route path="/hackernews" exact component={Home} />
        <Route component={MissingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
