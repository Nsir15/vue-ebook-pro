const actions = {
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName) // 返回promise
  },
  setMenuAndNavVisible: ({ commit }, menuAndNavVisible) => {
    return commit('SET_MENUANDNAV_VISIBLE', menuAndNavVisible)
  },
  setSettingVisible: ({ commit }, settingVisible) => {
    return commit('SET_SETTINGVISIBLE', settingVisible)
  },
  setDefaultFontSize: ({ commit }, defaultFontSize) => {
    return commit('SET_DEFAULT_FONT_SIZE', defaultFontSize)
  },
  setDefaultFontFamily: ({ commit }, font) => {
    return commit('SET_DEFAULT_FONT_FAMILY', font)
  },
  setFontFamilyVisible: ({ commit }, visible) => {
    return commit('SET_FONT_FAMILY_VISIBLE', visible)
  },
  setCurrentBook: ({ commit }, book) => {
    return commit('SET_CURRENT_BOOK', book)
  },
  setDefaultTheme: ({ commit }, theme) => {
    return commit('SET_DEFAULT_THEME', theme)
  },
  setBookAvailable: ({ commit }, bookAvailable) => {
    return commit('SET_BOOK_AVAILABLE', bookAvailable)
  },
  setProgress: ({ commit }, progress) => {
    return commit('SET_PROGRESS', progress)
  }
}

export default actions
