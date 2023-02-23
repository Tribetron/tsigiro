import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import INVESTMENTS from "../data/investments";

// create slice

const name = "investments";
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const investmentActions = { ...slice.actions, ...extraActions };
export const investmentReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    investments: {},
  };
}

function createExtraActions() {
  return {
    getAllInvestments: getAllInvestments(),
  };

  function getAllInvestments() {
    return createAsyncThunk(
      `${name}/getAllInvestments`,
      async () => INVESTMENTS
    );
  }
}

function createExtraReducers() {
  return {
    ...getAllInvestments(),
  };

  function getAllInvestments() {
    var { pending, fulfilled, rejected } = extraActions.getAllInvestments;
    return {
      [pending]: (state) => {
        state.investments = { loading: true };
      },
      [fulfilled]: (state, action) => {
        state.investments = action.payload;
      },
      [rejected]: (state, action) => {
        state.investments = { error: action.error, loading: false };
      },
    };
  }
}
