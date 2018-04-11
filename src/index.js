import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import greeting from './redux/reducers/reducer';
import Root from './config/Root';

const reducers = combineReducers({ greeting });

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  // hooks up Redux chrome extension. If extension does not exist, only take the first argument
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

export { store as default };

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const newApp = require('./config/Root').default;
    render(newApp);
  });
}
