import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { AsyncStorage } from 'react'
import { Storage } from 'redux-persist/lib/storage'

import { BrowserRouter as Router } from "react-router-dom";

import rootReducer from "./reducers"


// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: [
//     'authReducer',
//   ],
//   blacklist: [
//     'counterReducer',
//   ],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  // persistedReducer,
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


let persistor = persistStore(store);

console.log(store, "Redux Store's initial State")

ReactDOM.render(
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <Router><App /></Router>
      {/* </PersistGate> */}
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
