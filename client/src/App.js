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


function App() {
  return (
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
  );
}

export default App;
