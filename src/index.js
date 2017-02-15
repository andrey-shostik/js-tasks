import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import routes from './routes';

import './index.scss';
import reducer from './reducers'


function testReducer(state = []) {
  return [
    ...state
  ];
}

const store = createStore(testReducer);
// console.log(store);

// store.subscribe(() => {
//   console.log('subscribe', store.getState());
// });
//
// store.dispatch(
//   {
//     type: 'GET_ROOM_PLAYERS',
//     data: {
//       'sockets': { 'H5i_ALAr4JtJeMejAAAA': true },
//       'length': 1
//     }
//   }
// );
//
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      { routes() }
    </Router>
  </Provider>,
  document.getElementById('root')
);
