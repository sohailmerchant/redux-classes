import { configureStore } from "@reduxjs/toolkit";
import users from "./users";
import movies from "./movies";

export default configureStore({
  reducer: {
    users,
    movies,
  },
});
