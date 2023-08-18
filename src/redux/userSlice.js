import {createSlice} from '@reduxjs/toolkit';

// setup user slice

const initialState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, {payload}) {
      state.userInfo = payload;
    },
  },
});

export const userInfoSelector = state => state.user.userInfo;

export const {setUserInfo} = userSlice.actions;

export default userSlice.reducer;
