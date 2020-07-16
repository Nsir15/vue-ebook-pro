<!--
 * @Description:
 * @Author: MRNAN
 * @Date: 2020-07-16 20:45:20
 * @LastEditTime: 2020-07-16 20:56:56
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/views/store/StoreHome.vue
-->
<template>
 <div class="store-home">
   <search-bar></search-bar>
 </div>
</template>

<script>
import SearchBar from '../../components/store/SearchBar'
export default {
  components: { SearchBar },
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
@import '../../assets/styles/global';
.store-home{
  width: 100%;
  height: 100%;
  background: white;
}
</style>
