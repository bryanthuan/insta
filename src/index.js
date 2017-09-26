// let's go!
import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import './css/style.css';

import App from './components/App';

import store, { history } from './store';


const Root = (
      <Provider store={store}>
         <ConnectedRouter history={history}>         
            <Route path="/" component={App}></Route>         
         </ConnectedRouter>
      </Provider>
   );
render(Root, document.getElementById('root'));