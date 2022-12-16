/*
 * @Description : 封装 http
 * @Date        : 2022-12-16 00:21:13 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-12-16 00:52:47 +0800
 * @LastEditors : JackChou
 */
import axios from 'axios'

const defaultConfig = {
  // timeout: 1000 * 4,
  withCredentials: true,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
}

const http = axios.create(defaultConfig)

http.interceptors.response.use(res => {
  if (res.status < 299 && res.status >= 200) return Promise.resolve(res.data)
})

function get(url: string, params: Record<string, unknown>) {
  return http
    .get(url, params)
    .then(data => {
      return Promise.resolve([null, data])
    })
    .catch(err => {
      return Promise.resolve([err, null])
    })
}

export default { get }
