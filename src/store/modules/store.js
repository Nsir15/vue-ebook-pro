/*
 * @Description: 书城首页的数据
 * @Author: MRNAN
 * @Date: 2020-07-17 16:53:23
 * @LastEditTime: 2020-07-20 14:46:15
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/store/modules/store.js
 */

const store = {
  state: {
    hotSearchOffsetY: 0,
    flapCardVisible: false
  },
  mutations: {
    SET_HOT_SEARCH_OFFSETY: (state, hotSearchOffsetY) => {
      state.hotSearchOffsetY = hotSearchOffsetY
    },
    SET_FLAP_CART_VISIBLE: (state, flapCardVisible) => {
      state.flapCardVisible = flapCardVisible
    }
  }
}

export default store
