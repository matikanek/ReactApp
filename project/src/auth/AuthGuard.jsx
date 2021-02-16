import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { getToken } from "./AuthService";

export const AuthGuard = ({ component: Component, ...rest }) => {
  return (
      <Route {...rest} render={(props) => (
          getToken()
              ? <Component {...props} />
              : <Redirect to='/login' />
      )} />
  );
}