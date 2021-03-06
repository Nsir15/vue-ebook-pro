const book = {
  state: {
    fileName: '',
    menuAndNavVisible: false,
    settingVisible: -1, // -1 不显示,0:字体设置 1:主题 2:进度  3:目录
    defaultFontSize: 16,
    defaultFontFamily: 'Default',
    fontFamilyVisible: false,
    defaultTheme: 'Default',
    currentBook: null,
    bookAvailable: false,
    progress: 0,
    section: 0,
    readTime: 0,
    cover: null, // 封面图
    metadata: null, // 图书信息
    navigation: null, // 目录
    offsetY: 0, // 下滑添加书签用的拖动下滑的距离
    isBookmark: false // 是否已经是书签
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
    },
    SET_FONT_FAMILY_VISIBLE: (state, visible) => {
      state.fontFamilyVisible = visible
    },
    SET_DEFAULT_THEME: (state, theme) => {
      state.defaultTheme = theme
    },
    SET_BOOK_AVAILABLE: (state, bookAvailable) => {
      state.bookAvailable = bookAvailable
    },
    SET_PROGRESS: (state, progress) => {
      state.progress = progress
    },
    SET_SECTION: (state, section) => {
      state.section = section
    },
    SET_READ_TIME: (state, readTime) => {
      state.readTime = readTime
    },
    SET_COVER: (state, cover) => {
      state.cover = cover
    },
    SET_METADATA: (state, metadata) => {
      state.metadata = metadata
    },
    SET_NAVIGATION: (state, navigation) => {
      state.navigation = navigation
    },
    SET_OFFSETY: (state, offsetY) => {
      state.offsetY = offsetY
    },
    SET_IS_BOOKMARK: (state, isBookmark) => {
      state.isBookmark = isBookmark
    }
  }
}

export default book
