const book = {
  fileName: state => state.book.fileName,
  menuAndNavVisible: state => state.book.menuAndNavVisible,
  settingVisible: state => state.book.settingVisible,
  defaultFontSize: state => state.book.defaultFontSize,
  currentBook: state => state.book.currentBook
}
export default book
