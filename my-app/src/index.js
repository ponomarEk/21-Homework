import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';

import { createStore,applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './state/reducer';


const store = createStore( reducer , applyMiddleware(thunk) );

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
