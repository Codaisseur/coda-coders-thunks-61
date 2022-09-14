import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, selectLoading } from "../store/posts/selectors";
import { fetchPosts } from "../store/posts/thunks";

export default function Homepage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchPosts()); // we dispatch the thunk to trigger the fetching
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {loading ? (
        "Loading"
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
