import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers'
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';
const store = createStore(reducers, {}, applyMiddleware(promise));
ReactDom.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
