<!--
 * @Description: 书签组件的容器
 * @Author: MRNAN
 * @Date: 2020-07-08 10:21:46
 * @LastEditTime: 2020-07-13 22:22:27
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/components/ebook/EbookBookmark.vue
-->
<template>
 <div class="ebook-bookmark" ref="bookmark">
   <div class="ebook-bookmark-text-wrapper">
     <div class="ebook-bookmark-down-wrapper" ref="iconDown">
       <span class="icon-down"></span>
     </div>
     <div class="ebook-bookmark-text">{{text}}</div>
   </div>
   <div class="ebook-bookmark-icon-wrapper" :style="isFixed ? fixedStyle : {}">
     <bookmark :width="20" :height="40" :color="color"></bookmark>
   </div>
 </div>
</template>

<script>
import Bookmark from '../common/Bookmark'
import { realPx } from '../../utils/util'
import { ebookMixin } from '../../utils/mixin'
import { saveBookmark, getBookmark } from '../../utils/localStorage'
const BLUE = '#346CBC'
const WHITE = '#fff'

export default {
  mixins: [ebookMixin],
  components: {
    Bookmark
  },
  props: {},
  data () {
    return {
      text: '',
      color: WHITE,
      isFixed: false
    }
  },
  computed: {
    height () {
      return realPx(40)
    },
    threshold () {
      return realPx(55)
    },
    fixedStyle () {
      return {
        position: 'fixed',
        top: 0,
        right: '0px'
      }
    }
  },
  watch: {
    offsetY (value) {
      // 总共三个状态
      // 1. < height  跟随手指下移
      // 2. >= height   <临界值   fixed 定位，不继续下移
      // 3. 超过达临界值，添加书签
      // 4 . 归位

      if (value > 0 && value < this.height) {
        this.beforeHeight()
      } else if (value >= this.height && value < this.threshold) {
        this.beforeThreshold(value)
      } else if (value >= this.threshold) {
        this.afterThreshold(value)
      } else if (value === 0) { // 归位
        this.restore()
      }
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    addBookmark () {
      this.bookmark = getBookmark(this.fileName)
      if (!this.bookmark) {
        this.bookmark = []
      }
      const currentLocation = this.currentBook.rendition.currentLocation()
      // "epubcfi(/6/10[A978-1-4302-5927-5_2_Chapter]!/4/10/2/1:356)"
      //  获取前面的文件名部分   epubcfi(/6/10[A978-1-4302-5927-5_2_Chapter]
      const cfibase = currentLocation.start.cfi.replace(/!.*/, '')
      // 获取开始位置  /4/10/2/1:356)
      const cfistart = currentLocation.start.cfi.replace(/.*!/, '').replace(/\)$/, '')
      // 获取结束位置
      const cfiend = currentLocation.end.cfi.replace(/.*!/, '')
      // 拼接 range
      const cfirange = `${cfibase}!,${cfistart},${cfiend}`
      this.currentBook.getRange(cfirange).then(range => {
        // console.log('range===:', range.toString())
        const text = range.toString()
        this.bookmark.push({
          cfi: currentLocation.start.cfi,
          text
        })
        saveBookmark(this.fileName, this.bookmark)
      })
    },
    removeBookmark () {
      const currentLocation = this.currentBook.rendition.currentLocation()
      const cfi = currentLocation.start.cfi
      this.bookmark = getBookmark(this.fileName)
      if (this.bookmark) {
        this.bookmark.filter(item => item.cfi === cfi)
        this.setIsBookmark(false)
      }
    },
    beforeHeight () {
      if (this.isBookmark) {
        this.text = this.$t('book.pulldownDeleteMark')
        this.color = BLUE
        this.isFixed = true
      } else {
        this.text = this.$t('book.pulldownAddMark')
        this.color = WHITE
        this.isFixed = false
      }
    },
    beforeThreshold (value) {
      this.$refs.bookmark.style.top = `${-value}px`
      this.beforeHeight()
      const iconDown = this.$refs.iconDown
      if (iconDown.style.transform === 'rotate(180deg)') {
        iconDown.style.transform = 'rotate(0deg)'
      }
    },
    afterThreshold (value) {
      this.$refs.bookmark.style.top = `${-value}px`
      if (this.isBookmark) {
        this.text = this.$t('book.releaseDeleteMark')
        this.color = WHITE
        this.isFixed = false
      } else {
        this.text = this.$t('book.releaseAddMark')
        this.color = BLUE
        this.isFixed = true
      }

      const iconDown = this.$refs.iconDown
      if (iconDown.style.transform === '' || iconDown.style.transform === 'rotate(0deg)') {
        iconDown.style.transform = 'rotate(180deg)'
      }
    },
    restore () {
      setTimeout(() => {
        this.$refs.iconDown.style.transform = 'rotate(0deg)'
        this.$refs.bookmark.style.top = `${-this.height}px`
      }, 200)

      // 最后保存一下最终状态
      if (this.isFixed) {
        this.setIsBookmark(true)
        this.addBookmark()
      } else {
        this.setIsBookmark(false)
        this.removeBookmark()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global';

.ebook-bookmark{
  position: absolute;
  z-index: 150;
  left: 0;
  top: px2rem(-40);
  width: 100%;
  height: px2rem(40);
  .ebook-bookmark-text-wrapper{
    position: absolute;
    right: px2rem(50);
    bottom: 0;
    display: flex;
    font-size: px2rem(15);
    .ebook-bookmark-down-wrapper{
      transition: all .2s linear;
    }
    .ebook-bookmark-text{
      color: white;
    }
  }
  .ebook-bookmark-icon-wrapper{
    position: absolute;
    right: 0;
    // top: 0;
    bottom: 0;
    margin-right: px2rem(15);
  }
}
</style>
