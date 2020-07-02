<template>
 <div id="ebook">
   <ebook-nav></ebook-nav>
   <ebook-reader></ebook-reader>
   <ebook-menu></ebook-menu>
 </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import EbookReader from '../../components/ebook/EbookReader'
import EbookNav from '../../components/ebook/EbookNav'
import EbookMenu from '../../components/ebook/EbookMenu'

export default {
  mixins: [ebookMixin],
  components: {
    EbookReader,
    EbookNav,
    EbookMenu
  },
  props: {},
  data () {
    return {

    }
  },
  computed: {},
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

</style>
