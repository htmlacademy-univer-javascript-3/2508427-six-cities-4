import { AuthorizationStatus, Path } from '../settings.ts';
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: ReactElement;
};

function ProtectedRoute({authorizationStatus, children}: ProtectedRouteProps) {
  return (
    authorizationStatus === AuthorizationStatus.Authorized
      ? children
      : <Navigate to={Path.Login} />
  );
}

export default ProtectedRoute;
