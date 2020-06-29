<template>
 <div id="ebook">
   <ebook-nav></ebook-nav>
   <ebook-reader></ebook-reader>
 </div>
</template>

<script>
import EbookReader from '../../components/ebook/EbookReader'
import EbookNav from '../../components/ebook/EbookNav'
export default {
  components: {
    EbookReader,
    EbookNav
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
