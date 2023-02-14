import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import FLATDATA from "../data/properties";

// create slice

const name = "properties";
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const propertyActions = { ...slice.actions, ...extraActions };
export const propertyReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    properties: {},
  };
}

function createExtraActions() {
  return {
    getAll: getAll(),
  };

  function getAll() {
    return createAsyncThunk(`${name}/getAll`, async () => FLATDATA);
  }
}

function createExtraReducers() {
  return {
    ...getAll(),
  };

  function getAll() {
    var { pending, fulfilled, rejected } = extraActions.getAll;
    return {
      [pending]: (state) => {
        state.properties = { loading: true };
      },
      [fulfilled]: (state, action) => {
        state.properties = action.payload;
      },
      [rejected]: (state, action) => {
        state.properties = { error: action.error };
      },
    };
  }
}
