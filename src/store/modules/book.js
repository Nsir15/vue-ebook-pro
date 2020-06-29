const book = {
  state: {
    fileName: '',
    menuAndNavVisible: false,
    settingVisible: -1, // -1 不显示,0:字体设置 1:主题 2:进度  3:目录
    defaultFontSize: 16,
    defaultFontFamily: 'Default',
    currentBook: null
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_MENUANDNAV_VISIBLE: (state, menuAndNavVisible) => {
      state.menuAndNavVisible = menuAndNavVisible
    },
    SET_SETTINGVISIBLE: (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    SET_DEFAULT_FONT_SIZE: (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    },
    SET_DEFAULT_FONT_FAMILY: (state, font) => {
      state.defaultFontFamily = font
    },
    SET_CURRENT_BOOK: (state, currentBook) => {
      state.currentBook = currentBook
    }
  }
}

export default book
