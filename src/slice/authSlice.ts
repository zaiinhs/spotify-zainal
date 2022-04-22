import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types/user';

interface IInitialState {
  accessToken: string;
  isAuthorized: boolean;
  user: User | null;
};

const initialState: IInitialState = {
  accessToken: '',
  isAuthorized: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.isAuthorized = true;
      state.user = action.payload.user;

      localStorage.setItem('accessToken', state.accessToken);
      localStorage.setItem('expiredDate', action.payload.expiredDate);
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.accessToken = '';
      state.isAuthorized = false;
      state.user = null;

      localStorage.removeItem('accessToken');
      localStorage.removeItem('expiredDate');
      localStorage.removeItem('user');
    },
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
