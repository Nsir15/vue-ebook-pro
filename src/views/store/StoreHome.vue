<!--
 * @Description:
 * @Author: MRNAN
 * @Date: 2020-07-16 20:45:20
 * @LastEditTime: 2020-07-18 16:04:15
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/views/store/StoreHome.vue
-->
<template>
 <div class="store-home">
  <search-bar v-show="searchBarVisible"></search-bar>
  <!-- 因为它是一个字面 prop，它的值是字符串 "1" 而不是 number。如果想传递一个实际的 number，需要使用 v-bind，从而让它的值被当作JS表达式计算  -->
  <scroll :top= '96' @onScroll='onScroll'>
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
