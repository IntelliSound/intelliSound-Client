import './style/main.scss';
import './style/_intellisound-vars.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import App from './component/app';
import reducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

import session from './lib/redux-session';
import thunk from './lib/redux-thunk';
import reporter from './lib/redux-reporter';


let middleware = {
  thunk,
  session,
  reporter,
};

let store = null;

//-------------------------------------------------------------
// david - this sets up the store for debug environment, removes it for production
//-------------------------------------------------------------

if (process.env.NODE_ENV === 'production'){
  store = createStore(reducer, applyMiddleware(thunk, session));
} else {
  store = createStore(reducer,composeWithDevTools(
    applyMiddleware(thunk, session, reporter)
  ));
}


//-------------
// Nicholas - state displayer from lecture
//-------------
store.subscribe(() => {
  console.log('__STATE__', store.getState());
});
//-------------

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(
  <Provider store = {store}>
    <App />
  </Provider>, container);
