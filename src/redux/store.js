import { configureStore } from "@reduxjs/toolkit";

import { propertyReducer } from "./properties.slice";

import { investmentReducer } from "./investments.slice";

export * from "./properties.slice";
export * from "./investments.slice";

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    investments: investmentReducer,
  },
});
