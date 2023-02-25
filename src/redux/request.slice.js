import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import FLATDATA from "../data/requests";

// create slice

const name = "requests";
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const requestActions = { ...slice.actions, ...extraActions };
export const requestReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    requests: {},
  };
}

function createExtraActions() {
  return {
    getRequests: getRequests(),
  };

  function getRequests() {
    return createAsyncThunk(`${name}/getRequests`, async () => FLATDATA);
  }
}

function createExtraReducers() {
  return {
    ...getRequests(),
  };

  function getRequests() {
    var { pending, fulfilled, rejected } = extraActions.getRequests;
    return {
      [pending]: (state) => {
        state.requests = { loading: true };
      },
      [fulfilled]: (state, action) => {
        state.requests = action.payload;
      },
      [rejected]: (state, action) => {
        state.requests = { error: action.error };
      },
    };
  }
}
