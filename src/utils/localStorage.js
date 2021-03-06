import Storage from 'web-storage-cache'
const localStorage = new Storage()

export function setLocalStorage (key, value) {
  return localStorage.set(key, value)
}

export function getLocalStorage (key) {
  return localStorage.get(key)
}

export function removeLocalStorage (key) {
  return localStorage.delete(key)
}

export function clearLocalStorage () {
  return localStorage.clear()
}

export function setBookObj (fileName, key, value) {
  let book = getLocalStorage(`${fileName}-info`)
  if (!book) {
    book = {}
  }

  book[key] = value
  setLocalStorage(`${fileName}-info`, book)
}

export function getBookObj (fileName, key) {
  const book = getLocalStorage(`${fileName}-info`)
  if (book) {
    return book[key]
  } else {
    return null
  }
}

export function saveFontFamily (fileName, fontFamily) {
  setBookObj(fileName, 'fontFamily', fontFamily)
}

export function getFontFamily (fileName) {
  return getBookObj(fileName, 'fontFamily')
}

export function saveFontSize (fileName, fontSize) {
  setBookObj(fileName, 'fontSize', fontSize)
}

export function getFontSize (fileName) {
  return getBookObj(fileName, 'fontSize')
}

// 国际化的
export function saveLocale (locale) {
  setLocalStorage('locale', locale)
}

export function getLocale () {
  getLocalStorage('locale')
}

export function saveTheme (fileName, theme) {
  setBookObj(fileName, 'theme', theme)
}

export function getTheme (fileName) {
  return getBookObj(fileName, 'theme')
}

// 保存 当前这本书的阅读进度位置
export function saveLocation (fileName, location) {
  setBookObj(fileName, 'location', location)
}

export function getLocation (fileName) {
  return getBookObj(fileName, 'location')
}

// 保存书签
export function saveBookmark (fileName, bookmark) {
  setBookObj(fileName, 'bookmark', bookmark)
}

export function getBookmark (fileName) {
  return getBookObj(fileName, 'bookmark')
}
