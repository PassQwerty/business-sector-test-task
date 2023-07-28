import { createSlice } from "@reduxjs/toolkit";

interface PostsState {
  posts: Post[];
  sortedPost: Data;
  sortedBy: boolean;
}

const initialState: PostsState = {
  posts: [],
  sortedPost: [],
  sortedBy: true,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setSortedPosts(state, action) {
      state.sortedPost = action.payload;
    },
    changeSorted(state, action) {
      state.sortedBy = action.payload;
    },
  },
});

export const { setPosts, setSortedPosts, changeSorted } = postsSlice.actions;

export default postsSlice.reducer;
