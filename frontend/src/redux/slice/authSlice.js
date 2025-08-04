import { createSlice } from '@reduxjs/toolkit';

 

const authSlice = createSlice({
  name: "auth",
  initialState : {
  user: JSON.parse(localStorage.getItem('userInfo')) || null,
},
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