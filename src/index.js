import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginPage from './containers/LoginPage';
import ModalPage from './containers/ModalPage';
import ModalReducer from './reducers/ModalReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import 'typeface-roboto';

const store = createStore(ModalReducer)

const routing = (
 <Provider store={store}>	
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={LoginPage} />
      <Route path="/modal" component={ModalPage} />
    </div>
  </Router>
  </Provider>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
