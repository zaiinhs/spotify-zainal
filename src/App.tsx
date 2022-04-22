import React, { useEffect } from 'react';
import CreatePlaylist from './pages/CreatePlaylist';
import { useLocation, Switch, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import GuardRoute from './components/GuardRoute';
import NotFound from './pages/NotFound';
import { login, logout } from './slice/authSlice';
import { useAppDispatch, useAppSelector } from './store';
import { User } from './types/user';
import Profile from './pages/Profile';

const App: React.FC = () => {
  const { pathname }: { pathname: string } = useLocation();
  const dispatch = useAppDispatch();
  const accessTokenState: string = useAppSelector((state) => state.auth.accessToken);

  useEffect(() => {
    const accessToken: string | null = localStorage.getItem('accessToken');

    if (accessToken) {
      const expiredDate: string | null = localStorage.getItem('expiredDate');

      if (+(expiredDate as string) < +new Date()) {
        dispatch((logout()));
      } else if (!accessTokenState) {
        const user: User | string = JSON.parse(localStorage.getItem('user') || '');
        dispatch(login({
          accessToken,
          user,
          expiredDate,
        }));
      }
    }
  }, [accessTokenState, dispatch, pathname]);

  return (
    <Switch>
      <GuardRoute path="/create-playlist" type="private" exact>
        <CreatePlaylist />
      </GuardRoute>
      <GuardRoute path="/" type="guest" exact>
        <Auth />
      </GuardRoute>
      <GuardRoute path="/profile" type="private" exact>
        <Profile />
      </GuardRoute>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
