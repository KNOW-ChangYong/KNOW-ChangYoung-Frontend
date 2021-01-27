import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { createStore, applyMiddleware, Middleware, StoreEnhancer } from "redux";
import rootReducer from "./stores/reducers"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/saga";
const sagaMiddleware = createSagaMiddleware();
const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
