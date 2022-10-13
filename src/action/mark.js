import action from '../lib/createAction'


export const GET_MARK = "GET_MARK"
export const getMark = () => action("GET_MARK", {})

export const SET_MARK = "SET_MARK"
export const setMark = (data) => action("SET_MARK", { data })