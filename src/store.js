import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';
export const history = createHistory();
const middleware = routerMiddleware(history);
// create an object for the default data
const defaultState = {
   posts,
   comments
};

const store = createStore(rootReducer, defaultState, applyMiddleware(middleware));

// export const history = syncHistoryWithStore(createHistory(), store);
export default store;
