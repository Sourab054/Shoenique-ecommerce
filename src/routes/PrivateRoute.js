import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { DataContext } from "../DataContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const value = useContext(DataContext);
  const currentUser = value.currentUser;

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
