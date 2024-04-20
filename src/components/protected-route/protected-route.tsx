import {AuthorizationStatus} from '../../settings.ts';
import {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';

type ProtectedRouteProps = {
  children: ReactElement;
};

function ProtectedRoute({children}: ProtectedRouteProps) {
  const {authorizationStatus} = useAppSelector((state) => state);
  return (
    authorizationStatus === AuthorizationStatus.Authorized
      ? children
      : <Navigate to="/login"/>
  );
}

export default ProtectedRoute;
