import { configureStore } from "@reduxjs/toolkit";
import { propertyReducer } from "./properties.slice";
import { investmentReducer } from "./investments.slice";
import { userReducer } from "./user.slice";
import { requestReducer } from "./request.slice";

export * from "./properties.slice";
export * from "./investments.slice";
export * from "./user.slice";
export * from "./request.slice";

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    investments: investmentReducer,
    user: userReducer,
    requests: requestReducer,
  },
});
