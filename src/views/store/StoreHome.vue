<!--
 * @Description:
 * @Author: MRNAN
 * @Date: 2020-07-16 20:45:20
 * @LastEditTime: 2020-08-18 10:21:14
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/views/store/StoreHome.vue
-->
<template>
 <div class="store-home">
  <search-bar></search-bar>
  <!-- 因为它是一个字面 prop，它的值是字符串 "1" 而不是 number。如果想传递一个实际的 number，需要使用 v-bind，从而让它的值被当作JS表达式计算  -->
  <scroll :top= 'scrollTop' @onScroll='onScroll' ref="scroll">
    <div v-for="(item,index) in 40" :key="index">{{index}}</div>
  </scroll>
  <flap-card v-show="flapCardVisible" :randomBookData="randomBookData"></flap-card>
 </div>
</template>

<script>
import SearchBar from '../../components/store/SearchBar'
import Scroll from '../../components/common/Scroll'
import FlapCard from '../../components/store/FlapCard'
import { storeHomeMixin } from '../../utils/mixin'
import { home } from '../../api/book'

export default {
  mixins: [storeHomeMixin],
  components: { SearchBar, Scroll, FlapCard },
  props: {},
  data () {
    return {
      scrollTop: 96,
      randomBookData: {}
    }
  },
  computed: {},
  created () {

  },
  mounted () {
    home().then(({ data }) => {
      console.log(data)
      const randomIndex = Math.floor(Math.random() * data.random.length)
      this.randomBookData = data.random[randomIndex]
    })
  },
  methods: {
    onScroll (offsetY) {
      this.setOffsetY(offsetY)
      if (offsetY > 0) {
        this.scrollTop = 52
      } else {
        this.scrollTop = 96
      }
      // 刷新一下尺寸
      this.$refs.scroll.init()
    },
    closeFlapCard () {

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
