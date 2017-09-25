// let's go!
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory'
// const history = createHistory();

import './css/style.css';

import App from './components/App';

import { Provider } from 'react-redux';

import store, { history } from './store';


const Root = (
      <Provider store={store}>
         <Router history={history}>         
            <Route path="/" component={App} />         
         </Router>
      </Provider>
   );
render(Root, document.getElementById('root'));