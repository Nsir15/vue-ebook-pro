<template>
 <div class="ebook-slide-bookmark">
   <div class="slide-bookmark-title">{{$t('book.bookmark')}} · {{bookmark ? bookmark.length : 0}}</div>
   <scroll class="slide-bookmark-list" :top="48" :bottom="48">
     <div class="slide-bookmark-item" v-for="(item,index) in bookmark" :key="index" @click="displayTarget(item.cfi)">
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
    displayTarget (cfi) {
      this.display(cfi, () => {
        this.setMenuAndNavVisible(false)
        this.setSettingVisible(-1)
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global';
.ebook-slide-bookmark{
  font-size: px2rem(14);
  .slide-bookmark-title{
    padding:px2rem(15);
    font-size: px2rem(20);
    box-sizing: border-box;
  }
  .slide-bookmark-list{
    width: 100%;
    .slide-bookmark-item{
      display: flex;
      padding: px2rem(10);
      box-sizing: border-box;
      .slide-bookmark-item-icon{
        flex: 0 0 px2rem(30);
      }
      .slide-bookmark-item-text{
        flex: 1;
        @include ellipsis2(3);
      }
    }
  }
}

</style>
