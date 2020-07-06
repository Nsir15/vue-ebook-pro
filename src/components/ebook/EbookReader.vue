<template>
 <div id="epub-reader">
   <div id="reader">

   </div>
 </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { saveFontFamily, getFontFamily, saveFontSize, getFontSize, saveTheme, getTheme, getLocation } from '../../utils/localStorage'
import Epub from 'epubjs'

export default {
  mixins: [ebookMixin],
  components: {
  },
  props: {},
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    const fileName = this.$route.params.filename.split('|').join('/')
    this.setFileName(fileName).then(() => {
      this.initEpub()
    })
  },
  methods: {
    prevPage () {
      if (this.rendition) {
        this.rendition.prev()
      }
    },
    nextPage () {
      if (this.rendition) {
        this.rendition.next()
      }
    },
    showNavAndMenu () {
      // this.$store.dispatch('setMenuAndNavVisible', !this.menuAndNavVisible)
      if (this.menuAndNavVisible) {
        this.setSettingVisible(-1)
      }
      this.setMenuAndNavVisible(!this.menuAndNavVisible)
    },
    initFontSize () {
      let fontSize = getFontSize(this.fileName)
      if (!fontSize) {
        fontSize = this.defaultFontSize
        saveFontSize(this.fileName, this.defaultFontSize)
      } else {
        this.setDefaultFontSize(fontSize)
      }
      this.rendition.themes.fontSize(fontSize)
    },
    initFontFamily () {
      let fontFamily = getFontFamily(this.fileName)
      if (!fontFamily) {
        fontFamily = this.defaultFontFamily
        saveFontFamily(this.fileName, this.defaultFontFamily)
      } else {
        this.setDefaultFontFamily(fontFamily)
      }
      this.rendition.themes.font(fontFamily)
    },
    initTheme () {
      let defaultTheme = getTheme(this.fileName)
      if (!defaultTheme) {
        defaultTheme = this.themeList[0].name
        saveTheme(defaultTheme)
      }
      this.setDefaultTheme(defaultTheme)
      this.themeList.forEach(theme => {
        this.rendition.themes.register(theme.name, theme.style)
      })
      // 初始化默认主题
      this.rendition.themes.select(defaultTheme)
    },
    initGesture () {
      // 添加touch事件
      this.rendition.on('touchstart', event => {
        this.touchStartX = event.changedTouches[0].clientX
        this.touchStartTime = event.timeStamp
      })
      this.rendition.on('touchend', event => {
        // 移动距离
        const offsetX = event.changedTouches[0].clientX - this.touchStartX
        // 手势时间
        const time = event.timeStamp - this.touchStartTime

        // 这里规定  时间小于500 距离大于40 进行翻页
        if (time < 500 && offsetX > 40) {
          this.prevPage()
        } else if (time < 500 && offsetX < -40) {
          this.nextPage()
        } else {
          this.showNavAndMenu()
        }

        //  阻止默认事件
        // event.preventDefault()
        // // 禁止冒泡
        event.stopPropagation()
      })
    },

    initRendition () {
      this.rendition = this.book.renderTo('reader', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      })
    },
    // 扁平化一下数组
    flatten (arr) {
      let newArr = []
      arr.forEach(item => {
        newArr.push(item)
        if (item.subitems.length) {
          newArr = newArr.concat(this.flatten(item.subitems))
        }
      })
      return newArr
    },
    parseBook () {
      this.book.loaded.cover.then(cover => {
        this.book.archive.createUrl(cover).then(url => {
          this.setCover(url)
        })
      })

      this.book.loaded.metadata.then(metadata => {
        this.setMetadata(metadata)
      })

      this.book.loaded.navigation.then(nav => {
        // console.log('目录数据', this.flatten(nav.toc))
        const navItem = this.flatten(nav.toc)
        // 给每个item添加一个level标识，用来UI渲染的时候进行缩进。
        function findLevel (item, level = 0) {
          // 初始值0 如果没有parent，则level为0 代表最外层。
          // 有parent的话，将level + 1 ,将父item传进去再寻找，如果没有那就是 第二次，如果有，那再 + 1 ，将祖父item传进去找。。。。。依次类推
          return !item.parent ? level : findLevel(navItem.filter(parentItem => parentItem.id === item.parent)[0], ++level)
        }

        navItem.forEach(item => {
          item.level = findLevel(item)
        })
        this.setNavigation(navItem)
      })
    },
    initEpub () {
      const baseUrl = process.env.VUE_APP_RES_URL + '/epub/'
      const url = baseUrl + this.fileName + '.epub'
      this.book = new Epub(url)
      this.setCurrentBook(this.book)
      this.initRendition()
      this.parseBook()
      const location = getLocation(this.fileName)
      this.display(location, _ => {
        this.initFontSize()
        this.initFontFamily()
        this.initTheme()
        this.initGlobalStyle()
      })
      this.initGesture()
      // 阅读器渲染完成，可以获取到资源的时候
      this.rendition.hooks.content.register(contents => {
        Promise.all([
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`)
        ]).then(() => {
        })
      })

      // 获取location对象
      // console.log(this.book.location)  // 默认是空的，因为location 对象比较耗性能
      // 通过ebook的钩子函数来生成location
      // book 解析完成时候会回调
      this.book.ready.then(() => {
        return this.book.locations.generate(750 * (innerWidth / 375) * (getFontSize(this.fileName) / 16))
      }).then(result => {
        this.setBookAvailable(true)
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
