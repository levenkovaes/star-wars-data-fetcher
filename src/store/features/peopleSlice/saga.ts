import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";

import { getPeople, getPeopleFailur, getPeopleSuccess } from "./peopleSlice";

export function* getPeopleSaga(action: ReturnType<typeof getPeople>) {
  try {
    const response: AxiosResponse = yield axios.get(action.payload.url);
    yield put(getPeopleSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield put(getPeopleFailur(e));
  }
}

export function* watchGetPeople() {
  yield takeLatest(getPeople.type, getPeopleSaga);
}
