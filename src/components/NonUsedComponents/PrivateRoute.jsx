import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={({ location }) =>
        isLoggedIn ? (
          <Component />
        ) : (
          <Navigate to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;