import { configureStore } from "@reduxjs/toolkit";

import { propertyReducer } from "./properties.slice";

import { investmentReducer } from "./investments.slice";
import { userReducer } from "./user.slice";

export * from "./properties.slice";
export * from "./investments.slice";
export * from "./user.slice";

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    investments: investmentReducer,
    user: userReducer,
  },
});
