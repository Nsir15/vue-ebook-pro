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
  section: state => state.book.section
}
export default book
