/*
 * @Description:
 * @Author: MRNAN
 * @Date: 2020-07-23 22:03:19
 * @LastEditTime: 2020-08-17 22:32:39
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/utils/httpRequest.js
 */
import axios from 'axios'

const http = axios.create({
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// 请求拦截
http.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
http.interceptors.response.use(response => {
  if (response) {
    return response
  }
}, error => {
  return Promise.reject(error)
})

export default http
