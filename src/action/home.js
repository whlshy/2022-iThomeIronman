import action from '../lib/createAction'

// 定義type，讓reducer可以找到對應的資料修改方式
export const GET_DATA = "GET_DATA"
// 設定function來傳遞資料
export const getData = () => action("GET_DATA", {})


export const SET_DATA = "SET_DATA"
export const setData = (data) => action("SET_DATA", { data })