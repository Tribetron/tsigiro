import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import FLATDATA from "../data/user";

// create slice

const name = "users";
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const userActions = { ...slice.actions, ...extraActions };
export const userReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    user: {},
  };
}

function createExtraActions() {
  return {
    getUser: getUser(),
  };

  function getUser() {
    return createAsyncThunk(`${name}/getUser`, async () => FLATDATA);
  }
}

function createExtraReducers() {
  return {
    ...getUser(),
  };

  function getUser() {
    var { pending, fulfilled, rejected } = extraActions.getUser;
    return {
      [pending]: (state) => {
        state.user = { loading: true };
      },
      [fulfilled]: (state, action) => {
        state.user = action.payload;
      },
      [rejected]: (state, action) => {
        state.user = { error: action.error };
      },
    };
  }
}
