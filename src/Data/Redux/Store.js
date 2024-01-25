import { configureStore } from "@reduxjs/toolkit";
import PizzaReducer from "./ReduxSlices";

export const store = configureStore({
  reducer: {
    pizza: PizzaReducer,
  },
});
