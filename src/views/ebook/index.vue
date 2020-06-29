<template>
 <div id="ebook">
   <ebook-nav></ebook-nav>
   <ebook-reader></ebook-reader>
   <ebook-menu></ebook-menu>
 </div>
</template>

<script>
import EbookReader from '../../components/ebook/EbookReader'
import EbookNav from '../../components/ebook/EbookNav'
import EbookMenu from '../../components/ebook/EbookMenu'

export default {
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

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
