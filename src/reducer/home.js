// 把所有action引入
import * as action from '../action'

const initialState = {
  data: null
}

export default (state = initialState, { type, ...payload }) => {
  switch (type) {

    // 用辨別type來看要採取甚麼行動更改state
    case action.SET_DATA:
      return {
        ...state,
        data: payload.data,
      }

    default:
      return state
  }
}