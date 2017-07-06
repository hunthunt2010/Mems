import 'babel-polyfill';
import 'whatwg-fetch';
import 'Base64';
import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

/*eslint no-unused-vars: 0*/
render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app')
);