import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import EsriMapContainer from "../containers/EsriMapContainer/EsriMapContainer";

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/yumMap" component={EsriMapContainer} exact />
            </Switch>
        </Router>
    );
};

export default Root;
