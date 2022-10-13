import { createSlice } from "@reduxjs/toolkit";

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
      const data = ["suleman", "fardeen", "sohail", "ilyas"];
      const visitors = ["suleman", "fardeen", "sohail", "ilyas"];
      state.visitors = visitors;
      state.users = data;
    },
  },
});

export const { getUsers } = usersState.actions;
export default usersState.reducer;
