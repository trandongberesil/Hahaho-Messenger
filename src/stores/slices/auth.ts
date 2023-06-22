import { createSlice } from '@reduxjs/toolkit';

const initialState: { isLogin: boolean; authId: string; authName: string } = {
  isLogin: false,
  authId: '',
  authName: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { id, name } = action.payload;
      (state.authId = id), (state.authName = name);
      state.isLogin = true;
    },

    logout(state) {
      (state.authId = ''), (state.authName = '');
      state.isLogin = false;
    },
  },
});

export default authSlice.reducer;

export const authLogin = (authInfo) => {
  return authSlice.actions.login(authInfo);
};

export const authLogout = () => {
  return authSlice.actions.logout();
};
