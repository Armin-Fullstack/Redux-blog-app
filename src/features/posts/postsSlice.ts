import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	// {
	//   id: crypto.nanoid(),
	//   title: "First one",
	//   author: "Abelardo Prosacco",
	//   content: "Rem nemo temporibus dolor quis maxime sit. Vero odio enim qui impedit. Incidunt et minima consequatu"
	// },
	// {
	//   id: crypto.nanoid(),
	//   title: "Second one",
	//   author: "Abelardo Prosacco",
	//   content: "Rem nemo temporibus dolor quis maxime sit. Vero odio enim qui impedit. Incidunt et minima consequatu"
	// },
	// {
	//   id: crypto.nanoid(),
	//   title: "third one",
	//   author: "Abelardo Prosacco",
	//   content: "Rem nemo temporibus dolor quis maxime sit. Vero odio enim qui impedit. Incidunt et minima consequatu"
	// }
];

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
	},
});

export const { postAdded, postEdited } = postsSlice.actions;

export default postsSlice.reducer;
