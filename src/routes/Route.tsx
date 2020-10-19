import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

// rota privada / usuario autenticado = OK
// rota privada / n autenticado = redireciona pro login
// rota n privada / usuario autenticado = redireciona pro Dashboard
// rota n privada / n autenticado = OK

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/dashboard',
                // location é o histórico de redirecionamentos
                state: { from: location },
              }}
            />
          );
      }}
    />
  );
};

export default Route;
