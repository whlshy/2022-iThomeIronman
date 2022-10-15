import axios from "axios"

const apiurl = 'http://localhost:5000' // 設定API網址
const cors = false
export default function ({ cmd, method = "GET", type = "json", data = {}, header = {}, fileList = [] }) {
  method = method.toUpperCase()
  type = type.toLowerCase()
  let url = `${apiurl}/${cmd}`
  let option = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...header,
    },
  }

  if (fileList.length) {
    let formData = new FormData()
    option.headers["Content-Type"] = "multipart/form-data"
    let filelist = [...fileList]
    filelist.forEach((file) => {
      formData.append("files", file)
    })
    Object.keys(data).map((key) => {
      formData.append(key, data[key])
    })
    data = formData
  }
  switch (method) {
    case "POST":
    case "PUT":
    case "DELETE":
      option.data = data
      break
    case "GET":
      option.params = data
      break
  }
  return axios({
    method,
    url,
    ...option,
    withCredentials: !!cors,
  })
    .then((res) => {
      return {
        ok: res.status == "200",
        status: res.status,
        body: res.data,
      }
    })
    .catch((err) => {
      let res = err.response
      if (res) {
        return {
          ok: res.status == "200",
          status: res.status,
          body: res.data,
        }
      } else {
        return {
          ok: false,
          status: 404,
          body: err.message,
        }
      }
    })
}