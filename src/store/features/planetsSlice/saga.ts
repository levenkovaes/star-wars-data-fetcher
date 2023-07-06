import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

import {
  getPlanets,
  getPlanetsFailure,
  getPlanetsSuccess,
} from "./planetsSlice";

export function* getPlanetsSaga(action: ReturnType<typeof getPlanets>) {
  try {
    const response = yield axios.get("https://swapi.dev/api/planets");
    console.log(response.data);
    yield put(getPlanetsSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield put(getPlanetsFailure(e));
  }
}

export function* watchGetPlanets() {
  yield takeLatest(getPlanets.type, getPlanetsSaga);
}
