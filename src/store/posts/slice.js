import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPosts: [],
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
  },
});

export const { savePosts } = postSlice.actions;

export default postSlice.reducer;
