import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import LandingPageContainer from './containers/LandingPageContainer/LandingPageContainer.jsx'
import { Provider } from 'react-redux'

//const store = createStore()

ReactDOM.render(
    <LandingPageContainer />,
    document.getElementById('root')
);