const book = {
  fileName: state => state.book.fileName,
  menuAndNavVisible: state => state.book.menuAndNavVisible,
  settingVisible: state => state.book.settingVisible,
  defaultFontSize: state => state.book.defaultFontSize,
  defaultFontFamily: state => state.book.defaultFontFamily,
  fontFamilyVisible: state => state.book.fontFamilyVisible,
  currentBook: state => state.book.currentBook,
  defaultTheme: state => state.book.defaultTheme,
  bookAvailable: state => state.book.bookAvailable,
  progress: state => state.book.progress,
  section: state => state.book.section,
  readTime: state => state.book.readTime,
  cover: state => state.book.cover,
  metadata: state => state.book.metadata,
  navigation: state => state.book.navigation,
  offsetY: state => state.book.offsetY,
  isBookmark: state => state.book.isBookmark,
  hotSearchOffsetY: state => state.store.hotSearchOffsetY,
  flapCardVisible: state => state.store.flapCardVisible
}
export default book
