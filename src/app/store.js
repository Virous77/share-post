import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/postSlice";
import usersSlice from "../features/usersSlice";

const store = configureStore({
  reducer: {
    post: postSlice.reducer,
    users: usersSlice.reducer,
  },
});

export default store;
