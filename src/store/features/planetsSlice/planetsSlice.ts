import { createSlice } from "@reduxjs/toolkit";

export const planetsSlice = createSlice({
  name: "planets",
  initialState: [],
  reducers: {
    getPlanets: (state, action) => {},
    getPlanetsFailure: (state, action) => {},
    getPlanetsSuccess: (state, action) => {},
  },
});

export const planetsSliceReducer = planetsSlice.reducer;
export const { getPlanets, getPlanetsFailure, getPlanetsSuccess } =
  planetsSlice.actions;
