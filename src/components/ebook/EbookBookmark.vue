<!--
 * @Description: 书签组件的容器
 * @Author: MRNAN
 * @Date: 2020-07-08 10:21:46
 * @LastEditTime: 2020-07-08 17:20:25
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
   <div class="ebook-bookmark-icon-wrapper">
     <bookmark :width="20" :height="40" :color="color"></bookmark>
   </div>
 </div>
</template>

<script>
import Bookmark from '../common/Bookmark'
import { realPx } from '../../utils/util'
import { ebookMixin } from '../../utils/mixin'
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
      color: WHITE
    }
  },
  computed: {
    height () {
      return realPx(40)
    },
    threshold () {
      return realPx(55)
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
        this.$refs.bookmark.style.top = `${-value}px`
        this.beforeHeight()
        const iconDown = this.$refs.iconDown
        if (iconDown.style.transform === 'rotate(180deg)') {
          iconDown.style.transform = 'rotate(0deg)'
        }
      } else if (value >= this.threshold) {
        this.$refs.bookmark.style.top = `${-value}px`
        if (this.isBookmark) {
          this.text = this.$t('book.releaseDeleteMark')
          this.color = WHITE
        } else {
          this.text = this.$t('book.releaseAddMark')
          this.color = BLUE
        }

        const iconDown = this.$refs.iconDown
        if (iconDown.style.transform === '' || iconDown.style.transform === 'rotate(0deg)') {
          iconDown.style.transform = 'rotate(180deg)'
        }
      } else if (value === 0) { // 归位
        setTimeout(() => {
          this.$refs.iconDown.style.transform = 'rotate(0deg)'
          this.$refs.bookmark.style.top = `${-this.height}px`
        }, 200)
      }
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    beforeHeight () {
      if (this.isBookmark) {
        this.text = this.$t('book.pulldownDeleteMark')
        this.color = BLUE
      } else {
        this.text = this.$t('book.pulldownAddMark')
        this.color = WHITE
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
