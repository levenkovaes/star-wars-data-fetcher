import { combineReducers } from "@reduxjs/toolkit";

import { peopleSliceReducer } from "./features/peopleSlice/peopleSlice";
import { planetsSliceReducer } from "./features/planetsSlice/planetsSlice";

export const rootReducer = combineReducers({
  planets: planetsSliceReducer,
  people: peopleSliceReducer,
});
