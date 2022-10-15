import action from '../lib/createAction'

export const GET_DATA = "GET_DATA"
export const getData = () => action("GET_DATA", {})


export const SET_DATA = "SET_DATA"
export const setData = (data) => action("SET_DATA", { data })

export const ADD_VIDEO = "ADD_VIDEO"
export const addVideo = (v, title) => action("ADD_VIDEO", { v, title })