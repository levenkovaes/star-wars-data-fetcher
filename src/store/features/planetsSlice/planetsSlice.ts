import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { IGetPlanetsAction, IPlanetsResponse, IState } from "./types";

const initialState: IState = {
  planetsResponse: {},
  isLoading: true,
};

export const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    getPlanets: (state, action: PayloadAction<IGetPlanetsAction>) => {
      state.isLoading = true;
    },
    getPlanetsFailure: (state, action) => {
      state.isLoading = false;
    },
    getPlanetsSuccess: (state, action: PayloadAction<IPlanetsResponse>) => {
      state.planetsResponse = action.payload;
      state.isLoading = false;
    },
  },
});

export const planetsSliceReducer = planetsSlice.reducer;
export const { getPlanets, getPlanetsFailure, getPlanetsSuccess } =
  planetsSlice.actions;

export const selectPlanetsResponse = (state: RootState) => {
  return state.planets.planetsResponse;
};
export const selectIsLoading = (state: RootState) => {
  return state.planets.isLoading;
};
