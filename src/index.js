// let's go!
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
const history = createHistory();

import './css/style.css';

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';


const Root = () => {
   return (
      <Router history={history}>         
         <Route path="/" component={Main}></Route>         
      </Router>
   );
}
render(<Root />, document.getElementById('root'));