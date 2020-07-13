<template>
 <div class="ebook-slide-bookmark">
   <div class="slide-bookmark-title">{{$t('book.bookmark')}} · {{bookmark ? bookmark.length : 0}}</div>
   <scroll class="slide-bookmark-list" :top="48" :bottom="48">
     <div class="slide-bookmark-item" v-for="(item,index) in bookmark" :key="index">
       <div class="slide-bookmark-item-icon">
         <span class="icon-bookmark"></span>
       </div>
       <div class="slide-bookmark-item-text">{{item.text}}</div>
     </div>
   </scroll>
 </div>
</template>

<script>
import Scroll from '../common/Scroll'
import { ebookMixin } from '../../utils/mixin'
import { getBookmark } from '../../utils/localStorage'
export default {
  mixins: [ebookMixin],
  components: {
    Scroll
  },
  props: {},
  data () {
    return {
      bookmark: null
    }
  },
  computed: {},
  created () {

  },
  mounted () {
    this.bookmark = getBookmark(this.fileName)
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global'

</style>
