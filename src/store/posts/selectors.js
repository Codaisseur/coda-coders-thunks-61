export const selectPosts = (reduxState) => reduxState.posts.allPosts;
export const selectLoading = (reduxState) => reduxState.posts.loading;

// more on this patter later
export const selectPostById = (id) => (reduxState) =>
  reduxState.posts.allPosts.find((p) => p.id === id);
