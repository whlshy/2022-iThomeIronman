import { takeEvery } from 'redux-saga/effects'
import * as action from "../action"

import * as home from './home'

export default function* () {
  yield takeEvery(action.GET_DATA, home.getData)
  yield takeEvery(action.ADD_VIDEO, home.addVideo)
}