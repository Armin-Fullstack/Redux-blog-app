import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },

    postEdited: {
      prepare(title, content, id) {
        return {
          payload: { title, content, id },
        };
      },

      reducer(state, action) {
        const { id, title: newTitle, content: newContent } = action.payload;
        const existingPost = state.find((post) => post.id === id);
        if (existingPost) {
          existingPost.title = newTitle;
          existingPost.content = newContent;
        }
      },
    },

    reactionAdded(state, action) {
      const {postId , name } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[name]++;
      }
    },
  },
});

export const { postAdded, postEdited, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
