import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  userIsNotAuthenticatedRedir,
  userIsAuthenticatedRedir,
} from '../../helpers';

import HomePage from '../home/HomePage';
import LoginPage from '../login/LoginPage';
import NotFoundPage from './NotFoundPage';

class App extends Component {

  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={userIsAuthenticatedRedir(HomePage)} />
          <Route path="/login" component={userIsNotAuthenticatedRedir(LoginPage)} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    )
  }
}

export default App;
