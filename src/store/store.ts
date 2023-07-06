import createSagaMiddleware from "redux-saga";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { planetsSliceReducer } from "./features/planetsSlice/planetsSlice";
import { getPlanetsSaga } from "./features/planetsSlice/saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  planets: planetsSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(getPlanetsSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
