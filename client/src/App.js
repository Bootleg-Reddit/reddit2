import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Subreddit from './pages/Subreddit'
import NewPost from './pages/NewPost'
import NewSubReddit from './pages/NewSubReddit'

import { Provider } from 'react-redux'
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/submit/subreddit">
            <NewSubReddit />
          </Route>
          <Route path="/submit">
            <NewPost />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/r">
            <Subreddit />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
