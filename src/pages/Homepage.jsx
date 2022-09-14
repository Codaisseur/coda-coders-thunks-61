import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { savePosts } from "../store/posts/slice";
import { selectPosts } from "../store/posts/selectors";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function Homepage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  async function fetchPosts() {
    try {
      const response = await axios.get(`${API_URL}/posts`);
      const posts = response.data.rows;
      console.log("posts", response.data);

      dispatch(savePosts(posts)); // send data to store!
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.length === 0 ? (
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
