import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
//import this is in navbar

export default ProtectedRoutes;
