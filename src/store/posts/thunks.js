import axios from "axios";
import { savePosts, startLoading, stopLoading } from "./slice";
const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

// action of type function
// when we dispatch it to the store it RUNS
// it doesn't get sent to the store as the regular actions

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    // const state = getState();
    // const token = state.user.token
    // const pizzaId = state.pizzas.details.id;

    dispatch(startLoading());

    const response = await axios.get(`${API_URL}/posts`);
    const posts = response.data.rows;
    console.log("posts", response.data);

    dispatch(savePosts(posts)); // dispatch a regular action { type, payload }
    dispatch(stopLoading());
  } catch (e) {
    console.log(e.message);
  }
};

// dispatch(fetchPosts());

// dispatch(fetchPostById(10));

export const fetchPostById = (id) => async (dispatch, getState) => {
  try {
    // const token = getState().userSlice.token

    dispatch(startLoading());

    const response = await axios.get(`${API_URL}/posts/${id}`);
    const posts = response.data.rows;
    console.log("posts", response.data);

    dispatch(savePosts(posts)); // dispatch a regular action { type, payload }
    dispatch(stopLoading());
  } catch (e) {
    console.log(e.message);
  }
};

export const thunkSkeleton = () => async (dispatch, getState) => {
  try {
    // we can dispatch things
    // we can do API calls
    // dispatch some more
  } catch (e) {
    console.log(e.message);
  }
};
