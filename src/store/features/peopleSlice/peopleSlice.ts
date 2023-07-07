import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { IGetPeopleAction, IPeopleResponse, IState } from "./types";

const initialState: IState = {
  peopleResponse: {},
  isLoading: true,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    getPeople: (state, action: PayloadAction<IGetPeopleAction>) => {
      state.isLoading = true;
    },
    getPeopleFailur: (state, action) => {
      state.isLoading = false;
    },
    getPeopleSuccess: (state, action: PayloadAction<IPeopleResponse>) => {
      state.peopleResponse = action.payload;
      state.isLoading = false;
    },
  },
});

export const peopleSliceReducer = peopleSlice.reducer;
export const { getPeople, getPeopleFailur, getPeopleSuccess } =
  peopleSlice.actions;

export const selectIsLoading = (state: RootState) => {
  return state.people.isLoading;
};
export const selectPeopleResponse = (state: RootState) => {
  return state.people.peopleResponse;
};
