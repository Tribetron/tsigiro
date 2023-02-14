import { configureStore } from "@reduxjs/toolkit";

import { propertyReducer } from "./properties.slice";

export * from "./properties.slice";

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
  },
});
