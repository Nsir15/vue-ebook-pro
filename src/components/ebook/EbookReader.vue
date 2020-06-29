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
    ...mapGetters(['fileName'])
  },
  mounted () {
    const fileName = this.$route.params.filename.split('|').join('/')
    this.$store.dispatch('setFileName', fileName).then(() => {
      this.initEpub()
    })
  },
  methods: {
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
    }
  }
}
</script>

<style scoped lang="scss">

</style>
