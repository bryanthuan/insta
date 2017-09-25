import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
   posts,
   comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(createHistory(), store);

export default store;
