import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandingPage';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact />
      </Switch>
    </Router>
  );
};

export default Root;
