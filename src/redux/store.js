import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./testReducer";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
