import * as action from '../action'

const initialState = {
  mark: null
}

export default (state = initialState, { type, ...payload }) => {
  switch (type) {

    case action.SET_MARK:
      return {
        ...state,
        mark: payload.data,
      }

    default:
      return state
  }
}