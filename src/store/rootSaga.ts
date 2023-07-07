import { all } from "redux-saga/effects";

import { watchGetPeople } from "./features/peopleSlice/saga";
import { watchGetPlanets } from "./features/planetsSlice/saga";

export function* rootSaga() {
  yield all([watchGetPlanets(), watchGetPeople()]);
}
