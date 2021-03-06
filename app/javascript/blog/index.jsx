import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import PostsIndex from './containers/posts_index';

import postsReducer from './reducers/posts_reducer';
import PostsShow from './containers/posts_show';
import PostsNew from './containers/posts_new';
import { reducer as formReducer } from 'redux-form';


const reducers = combineReducers({
  posts: postsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

const initialState = JSON.parse(document.getElementById('root').dataset.posts);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
   <Router history={history}>
     <div className="thin-container">
       <Switch>
        <Route path="/" exact component={PostsIndex} />
        <Route path="/posts/new" exact component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />
       </Switch>
     </div>
   </Router>
  </Provider>,
  document.getElementById('root')
);
