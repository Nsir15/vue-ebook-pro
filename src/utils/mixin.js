import { mapGetters, mapActions } from 'vuex'
import { themeList, clearThemeCss, addCss } from './book'
import { saveLocation } from '../utils/localStorage'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'menuAndNavVisible',
      'settingVisible',
      'defaultFontSize',
      'currentBook',
      'defaultFontFamily',
      'fontFamilyVisible',
      'defaultTheme',
      'bookAvailable',
      'progress',
      'section',
      'readTime',
      'cover',
      'metadata',
      'navigation',
      'offsetY',
      'isBookmark'
    ]),
    themeList () {
      return themeList(this)
    }
  },
  methods: {
    ...mapActions([
      'setFileName',
      'setMenuAndNavVisible',
      'setSettingVisible',
      'setDefaultFontSize',
      'setCurrentBook',
      'setDefaultFontFamily',
      'setFontFamilyVisible',
      'setDefaultTheme',
      'setBookAvailable',
      'setProgress',
      'setSection',
      'setReadTime',
      'setCover',
      'setMetadata',
      'setNavigation',
      'setOffsetY',
      'setIsBookmark'
    ]),

    initGlobalStyle () {
      clearThemeCss()
      switch (this.defaultTheme) {
        case 'Default':
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
          break
        case 'Eye':
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_eye.css`)
          break
        case 'Gold':
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_gold.css`)
          break
        case 'Night':
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_night.css`)
          break
        default:
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
          break
      }
    },
    display (location, callback) {
      if (location) {
        this.currentBook.rendition.display(location).then(_ => {
          this.updateLocation()
          callback && callback()
        })
      } else {
        this.currentBook.rendition.display().then(_ => {
          this.updateLocation()
          callback && callback()
        })
      }
    },
    // 刷新进度条位置
    updateLocation () {
      const currentLocation = this.currentBook.rendition.currentLocation()
      console.log(currentLocation)
      if (currentLocation && currentLocation.start) {
        // 章节开始的位置
        const startCfi = currentLocation.start.cfi
        const progress = this.currentBook.locations.percentageFromCfi(startCfi)
        this.setProgress(Math.floor(progress * 100))
        this.setSection(currentLocation.start.index)

        //  缓存一下当前阅读进度
        saveLocation(this.fileName, startCfi)
      }
    }
  }
}
