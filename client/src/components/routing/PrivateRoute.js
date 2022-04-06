import React, { useContext } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

const PrivateRoute = () => {
  // const PrivateRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  const location = useLocation();

  return isAuthenticated && !loading ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
  // return isAuthenticated && !loading ? children : <Navigate to='/' />;
};

export default PrivateRoute;
