const book = {
  fileName: state => state.book.fileName,
  menuAndNavVisible: state => state.book.menuAndNavVisible,
  settingVisible: state => state.book.settingVisible,
  defaultFontSize: state => state.book.defaultFontSize,
  defaultFontFamily: state => state.book.defaultFontFamily,
  currentBook: state => state.book.currentBook
}
export default book
