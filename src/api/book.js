/*
 * @Description:
 * @Author: MRNAN
 * @Date: 2020-07-23 22:11:43
 * @LastEditTime: 2020-07-23 22:43:49
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/api/book.js
 */
import http from '../utils/httpRequest'
export function home () {
  return http({
    url: `${process.env.VUE_APP_BASE_URL}/book/home`,
    method: 'get'
  })
}
