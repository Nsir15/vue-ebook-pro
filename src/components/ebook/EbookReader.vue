<template>
 <div id="epub-reader">
   <div id="reader">

   </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Epub from 'epubjs'

export default {
  components: {
  },
  props: {},
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['fileName', 'menuAndNavVisible'])
  },
  mounted () {
    const fileName = this.$route.params.filename.split('|').join('/')
    this.$store.dispatch('setFileName', fileName).then(() => {
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
      this.$store.dispatch('setMenuAndNavVisible', !this.menuAndNavVisible)
    },
    initEpub () {
      // const baseUrl = 'http://192.168.1.3:9001/epub/'
      const baseUrl = 'http://192.168.3.10:9001/epub/'
      const url = baseUrl + this.fileName + '.epub'
      this.book = new Epub(url)
      this.rendition = this.book.renderTo('reader', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      })
      this.rendition.display()
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
        event.preventDefault()
        // 禁止冒泡
        event.stopPropagation()
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
