<!--
 * @Description: 书签组件的容器
 * @Author: MRNAN
 * @Date: 2020-07-08 10:21:46
 * @LastEditTime: 2020-07-08 10:56:49
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/components/ebook/EbookBookmark.vue
-->
<template>
 <div class="ebook-bookmark">
   <div class="ebook-bookmark-text-wrapper">
     <div class="ebook-bookmark-down-wrapper">
       <span class="icon-down"></span>
     </div>
     <div class="ebook-bookmark-text">{{text}}</div>
   </div>
   <div class="ebook-bookmark-icon-wrapper"></div>
 </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      text: '下拉添加书签'
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

.ebook-bookmark{
  position: absolute;
  z-index: 150;
  left: 0;
  top: px2rem(-40);
  width: 100%;
  height: px2rem(40);
  display: flex;
  .ebook-bookmark-text-wrapper{
    display: flex;
    .ebook-bookmark-down-wrapper{

    }
    .ebook-bookmark-text{

    }
  }
  .ebook-bookmark-icon-wrapper{

  }
}
</style>
