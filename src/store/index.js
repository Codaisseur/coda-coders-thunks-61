import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./posts/slice";

const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});

export default store;
