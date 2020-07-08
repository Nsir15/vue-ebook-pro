<template>
 <div class="ebook" ref="ebook">
  <ebook-nav></ebook-nav>
  <ebook-reader></ebook-reader>
  <ebook-menu></ebook-menu>
  <ebook-bookmark></ebook-bookmark>
 </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { px2rem } from '../../utils/util'
import EbookReader from '../../components/ebook/EbookReader'
import EbookNav from '../../components/ebook/EbookNav'
import EbookMenu from '../../components/ebook/EbookMenu'
import EbookBookmark from '../../components/ebook/EbookBookmark'

export default {
  mixins: [ebookMixin],
  components: {
    EbookReader,
    EbookNav,
    EbookMenu,
    EbookBookmark
  },
  props: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {
    offsetY (value) {
      if (this.menuAndNavVisible || !this.bookAvailable) {
        return null
      }

      if (value > 0) {
        this.$refs.ebook.style.top = `${px2rem(this.offsetY)}rem`
      } else if (value === 0) {
        this.$refs.ebook.style.top = 0
        this.$refs.ebook.style.transition = 'all .2s linear'
        // 结束之后清除transition ,防止对下拉动作产生影响
        setTimeout(() => {
          this.$refs.ebook.style.transition = ''
        }, 200)
      }
    }
  },
  created () {

  },
  mounted () {
    this.startLoopReadTime()
  },
  beforeDestroy () {
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
    startLoopReadTime () {
      let readTime = 0
      this.interval = setInterval(_ => {
        readTime++
        // 30 秒加一次时间
        if (readTime % 30 === 0) {
          this.setReadTime(Math.ceil(readTime / 60))
        }
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
.ebook{
  position:absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
