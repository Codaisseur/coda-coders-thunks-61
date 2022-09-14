export const selectPosts = (reduxState) => reduxState.posts.allPosts;

// more on this patter later
export const selectPostById = (id) => (reduxState) =>
  reduxState.posts.allPosts.find((p) => p.id === id);
