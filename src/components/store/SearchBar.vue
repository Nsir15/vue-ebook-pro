<!--
 * @Description:
 * @Author: MRNAN
 * @Date: 2020-07-16 20:51:21
 * @LastEditTime: 2020-07-18 14:47:58
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/components/store/SearchBar.vue
-->
<template>
 <div class="search-bar">
   <div class="search-bar-title-wrapper">
     <div class="title-icon-back-wrapper">
       <span class="icon-back"></span>
     </div>
     <div class="title-text-wrapper">
       <span class="title-text-title">{{$t('home.title')}}</span>
     </div>
     <div class="title-icon-shake-wrapper">
       <span class="icon-shake"></span>
     </div>
   </div>
   <div class="search-bar-input-wrapper">
     <div class="search-bar-input">
      <span class="icon-search"></span>
      <input type="text" :placeholder="$t('home.hint')">
     </div>
   </div>
 </div>
</template>

<script>
export default {
  components: {},
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
.search-bar{
  position: relative;
  height: px2rem(96);
  .search-bar-title-wrapper{
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: px2rem(42);
    font-size: px2rem(14);
    .title-icon-back-wrapper{
      position: absolute;
      left: px2rem(17);
      top: 0;
      height: 100%;
      @include center;
    }
    .title-text-wrapper{
      line-height: px2rem(42);
      width: 100%;
      @include center;
    }
    .title-icon-shake-wrapper{
      position: absolute;
      right: px2rem(15);
      top: 0;
      height: 100%;
      @include center;
    }
  }
  .search-bar-input-wrapper{
    width: 100%;
    // position: absolute;
    // left: 0;
    // top: px2rem(52);
    padding: px2rem(10);
    box-sizing: border-box;
    .search-bar-input{
      background: #f4f4f4;
      border-radius: px2rem(20);
      padding: px2rem(5) px2rem(15);
      box-sizing: border-box;
      @include left;
      .icon-search{
        font-size: px2rem(16);
      }
      input{
        border: none;
        background: transparent;
        height: px2rem(22);
        margin-left: px2rem(10);
        &:focus{
          outline: none;
        }
        &::-webkit-input-placeholder{
          color: #ccc;
        }
      }
    }

  }
}
</style>
