const actions = {
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName) // 返回promise
  },
  setMenuAndNavVisible: ({ commit }, menuAndNavVisible) => {
    return commit('SET_MENUANDNAV_VISIBLE', menuAndNavVisible)
  }
}

export default actions
