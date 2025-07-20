import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    // Logout
    logoutAction: (state, action) => {
      state.user = null;
    },
  },
});



export const { loginAction, logoutAction } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;