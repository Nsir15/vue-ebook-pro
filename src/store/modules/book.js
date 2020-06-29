const book = {
  state: {
    fileName: '',
    menuAndNavVisible: false
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_MENUANDNAV_VISIBLE: (state, menuAndNavVisible) => {
      state.menuAndNavVisible = menuAndNavVisible
    }
  },
  actions: {
    setFileName: ({ commit }, fileName) => {
      return commit('SET_FILENAME', fileName) // 返回promise
    },
    setMenuAndNavVisible: ({ commit }, menuAndNavVisible) => {
      return commit('SET_MENUANDNAV_VISIBLE', menuAndNavVisible)
    }
  }
}

export default book
