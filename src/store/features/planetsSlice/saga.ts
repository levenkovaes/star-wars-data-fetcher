import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";

import {
  getPlanets,
  getPlanetsFailure,
  getPlanetsSuccess,
} from "./planetsSlice";

export function* getPlanetsSaga(action: ReturnType<typeof getPlanets>) {
  try {
    const response: AxiosResponse = yield axios.get(action.payload.url);
    yield put(getPlanetsSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield put(getPlanetsFailure(e));
  }
}

export function* watchGetPlanets() {
  yield takeLatest(getPlanets.type, getPlanetsSaga);
}
