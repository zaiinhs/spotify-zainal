import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAppSelector } from '../../store';

interface IProps {
  children: React.ReactNode;
  type: string;
}

const GuardRoute: React.FC<IProps & any> = ({ children, type, ...props }) =>{
  const isAuthorized: boolean = useAppSelector((state) => state.auth.isAuthorized);

  if (type === 'guest') {
    return (
      <Route {...props}>
        {!isAuthorized ? children : <Redirect to="/create-playlist" />}
      </Route>
    );
  }

  return (
    <Route {...props}>
      {isAuthorized ? children : <Redirect to="/" />}
    </Route>
  );
};

export default GuardRoute;
