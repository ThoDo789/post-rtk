import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { PrivateRoute } from './helpers/PrivateRoute';
import Login from "./views/Login";
import Signup from "./views/Signup";
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Login} path="/login" />
          <Route exact component={Signup} path="/signup" />
          <PrivateRoute exact component={Dashboard} path="/" />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
