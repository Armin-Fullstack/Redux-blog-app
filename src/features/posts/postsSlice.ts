import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: crypto.randomUUID(),
    title: "First one",
    author: "Abelardo Prosacco",
    content: "Rem nemo temporibus dolor quis maxime sit. Vero odio enim qui impedit. Incidunt et minima consequatu"
  },
  {
    id: crypto.randomUUID(),
    title: "Second one",
    author: "Abelardo Prosacco",
    content: "Rem nemo temporibus dolor quis maxime sit. Vero odio enim qui impedit. Incidunt et minima consequatu"
  },
  {
    id: crypto.randomUUID(),
    title: "third one",
    author: "Abelardo Prosacco",
    content: "Rem nemo temporibus dolor quis maxime sit. Vero odio enim qui impedit. Incidunt et minima consequatu"
  }
]

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {}
})

export default postsSlice.reducer

