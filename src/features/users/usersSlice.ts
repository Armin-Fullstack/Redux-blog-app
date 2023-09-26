import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Armin",
  },
  {
    id: "1",
    name: "Arian",
  },
  {
    id: "3",
    name: "Navid",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export function selectUserById(store, userId) {
  return store.users.find((user) => user.id === userId);
}

export default usersSlice.reducer;
