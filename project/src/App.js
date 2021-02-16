import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Login } from './pages/login/containers/Login';
import { TaskList } from './pages/tasks/pages/taks-list/containers/TaskList';
import { AuthGuard } from './auth/AuthGuard';
import { LoginGuard } from './auth/LoginGuard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/app/tasks" />
        </Route>
        <AuthGuard path="/app/tasks" component={TaskList} />
        <LoginGuard path="/login" redirectTo={'/app/tasks'} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
