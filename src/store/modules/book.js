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
  }
}

export default book
