<!--
 * @Description:
 * @Author: MRNAN
 * @Date: 2020-07-18 18:10:22
 * @LastEditTime: 2020-07-18 18:52:55
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/components/store/HotSearch.vue
-->
<template>
 <div class="hot-search-wrapper">
   <div class="hot-search-title">
     <span class="label">{{label}}</span>
     <span class="btn">{{btn}}</span>
   </div>
   <div class="hot-search-list">
     <div class="hot-search-item" v-for="(item,index) in hotSearch" :key="index">
       <div class="icon-wrapper">
         <span class="icon-book icon" v-if="item.type === 1"></span>
         <span class="icon-search icon" v-if="item.type === 2"></span>
       </div>
       <div class="hot-search-text-wrapper">
         <div class="text">{{item.text}}</div>
         <div class="num" v-if="item.num">{{item.num}}人搜索</div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  components: {},
  props: {
    label: String,
    btn: String,
    hotSearch: Array
  },
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
.hot-search-wrapper{
  .hot-search-title{
    font-size: px2rem(15);
    padding: px2rem(15);
    box-sizing: border-box;
    display: flex;
    .label{
      flex: 1;
      text-align: left;
    }
    .btn{
      flex: 0 0 px2rem(60);
      color: blue;
      font-weight: 600;
    }
  }
  .hot-search-list{
    font-size: px2rem(16);
    .hot-search-item{
      display: flex;
      padding: px2rem(10);
      box-sizing: border-box;
      @include center;
      .icon-wrapper{
        flex: 0 0 px2rem(20);
      }
      .hot-search-text-wrapper{
        margin-left: px2rem(10);
        flex: 1;
        @include ellipsis;
        .text{
          padding: px2rem(10) 0;
          box-sizing: border-box;;
        }
      }
    }
  }
}
</style>
