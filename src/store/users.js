import { createSlice } from "@reduxjs/toolkit";
import Configuration from "../config/default";

export const usersState = createSlice({
  name: "users",
  initialState: {
    users: [],
    adminUsers: [],
    publicUsers: [],
    visitors: [],
  },
  reducers: {
    getUsers: (state) => {
      // api call return response
      // `http://www.omdbapi.com/?apikey=${Configuration.MoviesApiKey}&s=harry`
      const data = ["suleman", "fardeen", "sohail", "ilyas"];
      const visitors = ["suleman", "fardeen", "sohail", "ilyas"];
      state.visitors = visitors;
      state.users = data;
    },
  },
});

export const { getUsers } = usersState.actions;
export default usersState.reducer;
