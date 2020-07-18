<!--
 * @Description:
 * @Author: MRNAN
 * @Date: 2020-07-16 20:45:20
 * @LastEditTime: 2020-07-18 15:59:16
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/views/store/StoreHome.vue
-->
<template>
 <div class="store-home">
  <search-bar v-show="searchBarVisible"></search-bar>
  <scroll top= 96 @onScroll='onScroll'>
    <div v-for="(item,index) in 40" :key="index">{{index}}</div>
  </scroll>
 </div>
</template>

<script>
import SearchBar from '../../components/store/SearchBar'
import Scroll from '../../components/common/Scroll'
import { storeHomeMixin } from '../../utils/mixin'

export default {
  mixins: [storeHomeMixin],
  components: { SearchBar, Scroll },
  props: {},
  data () {
    return {
      searchBarVisible: true
    }
  },
  computed: {},
  created () {

  },
  mounted () {

  },
  methods: {
    onScroll (offsetY) {
      this.setOffsetY(offsetY)
      if (this.offsetY > 0) {
        this.searchBarVisible = false
      } else {
        this.searchBarVisible = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global';
.store-home{
  width: 100%;
  height: 100%;
  background: white;
  position: relative;
}
</style>
