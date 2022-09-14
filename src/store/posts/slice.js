import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPosts: [],
  loading: false,
};

export const postSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {
    savePosts: (state, action) => {
      // Obj: save a list of posts to our state
      // payload ==> [{}, {}, {}]
      const listOfPosts = action.payload; // [{}, {}]
      state.allPosts = [...listOfPosts];
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { savePosts, startLoading, stopLoading } = postSlice.actions;

export default postSlice.reducer;
