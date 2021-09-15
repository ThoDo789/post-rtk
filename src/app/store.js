import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/User/UserSlice';
import {postSlice } from '../features/Posts/PostSlice';
import { actionSlice } from "../features/Actions/ActionSlice";
export default configureStore({
  reducer: {
    users: userSlice.reducer,
    posts: postSlice.reducer,
    actions: actionSlice.reducer,
  },
});
