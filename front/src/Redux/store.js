import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

/* légère modif du store pour importer plusieurs reducer dans root */
