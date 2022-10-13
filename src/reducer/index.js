import { combineReducers } from 'redux'

import home from './home'
import mark from './mark'

const rootReducer = combineReducers({
    home,
    mark,
})

export default rootReducer