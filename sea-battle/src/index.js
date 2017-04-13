import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import routes from './routes';

import './index.scss';
import reducer from './reducers'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      { routes() }
    </Router>
  </Provider>,
  document.getElementById('root')
);
