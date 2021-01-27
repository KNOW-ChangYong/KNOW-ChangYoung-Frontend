import { takeEvery, put, delay, all } from "redux-saga/effects";
import { SetNav_Today, SetNav_All, SetNav_Private,  ModalState } from "../actions/actions";
import {
  NAV_ALL,
  NAV_PRIVATE,
  NAV_TODAY
} from "../actions/constants";

function* SetNav_Privateasync() {
  yield delay(500);
  yield put(SetNav_Private());
}
function* SetNav_TodayAsync() {
  yield delay(500);
  yield put(SetNav_Today());
}
function* SetNav_AllAsync() {
  yield delay(500);
  yield put(SetNav_All());
}
function* SetModalAsync(set: string){
  yield delay(500);
  yield put(ModalState(set));
}

export default function* rootSaga() {
  yield all([SetNav_Privateasync, SetNav_AllAsync, SetNav_TodayAsync, SetModalAsync]);
}