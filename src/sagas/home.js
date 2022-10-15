import { take, call, put, select } from 'redux-saga/effects'
import * as action from '../action'
import api from '../lib/api'

const get_data = () => {
  return api({
    method: "GET",
    cmd: "api/Notes",
  })
}

const add_video = (req) => {
  return api({
    method: "GET",
    cmd: "api/Notes",
    data: req
  })
}

export function* getData({ }) {
  // 呼叫相對應API
  let data = yield call(get_data,)
  if (data.ok) {
    // 取得資料後再次呼叫action來設定reducer資料
    yield put(action.setData(data.body))
  }
}

export function* addVideo({ v, title }) {
  let data = yield call(add_video, { v, title })
  if (data.ok) {
    yield put(action.getData())
  }
}