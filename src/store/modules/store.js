/*
 * @Description: 书城首页的数据
 * @Author: MRNAN
 * @Date: 2020-07-17 16:53:23
 * @LastEditTime: 2020-07-18 18:24:19
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/store/modules/store.js
 */

const store = {
  state: {
    hotSearchOffsetY: 0
  },
  mutations: {
    SET_HOT_SEARCH_OFFSETY: (state, hotSearchOffsetY) => {
      state.hotSearchOffsetY = hotSearchOffsetY
    }
  }
}

export default store
