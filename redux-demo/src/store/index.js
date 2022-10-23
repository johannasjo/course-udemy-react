import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  // map of reducers - will be merged into one big reducer
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
