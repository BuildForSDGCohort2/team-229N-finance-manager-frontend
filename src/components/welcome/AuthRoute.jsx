import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useTypedSelector } from '../../redux/stateTypes';
// interface Prop {
//   component: any;
// }
export const AuthRoute1 = ({ component: Component, ...rest }) => {
  const { loggedIn } = useTypedSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !loggedIn ? <Redirect to="/welcome" exact /> : <Component {...props} />
      }
    />
  );
};

export const AuthRoute2 = ({ component: Component, ...rest }) => {
  const { loggedIn } = useTypedSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Redirect to="/company" /> : <Component {...props} />
      }
    />
  );
};
