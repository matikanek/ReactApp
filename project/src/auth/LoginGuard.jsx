import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { Login } from '../pages/login/containers/Login';
import { getToken } from "./AuthService";

export const LoginGuard = (redirectTo) => {
  return (
      <Route render={() => (
          !getToken()
              ? <Login />
              : <Redirect to={redirectTo} />
      )} />
  );
}