<!--
 * @Description:书城首页
 * @Author: MRNAN
 * @Date: 2020-07-16 10:11:46
 * @LastEditTime: 2020-08-18 10:29:34
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/views/store/index.vue
-->
<template>
 <div class="store">
  <transition :name="transitionName">
   <router-view class="child-view"></router-view>
  </transition>
 </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      transitionName: ''
    }
  },
  computed: {},
  beforeRouteUpdate (to, form, next) {
    if (to.meta.key > form.meta.key) {
      this.transitionName = 'slide-left'
    } else {
      this.transitionName = 'slide-right'
    }
    // 这个切记要加 ，不然那一直push 不能跳转到 detail 页面
    next()
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.store{
  width: 100%;
  height: 100%;
  .child-view{
    transform: translate3d(0, 0, 0);
      opacity: 1;
      &.slide-left-enter, &.slide-right-leave-to {
        transform: translate3d(100%, 0, 0);
        opacity: 0;
      }
      &.slide-left-leave-to, &.slide-right-enter {
        transform: translate3d(-100%, 0, 0);
        opacity: 0;
      }
      &.slide-left-enter-active, &.slide-left-leave-active {
        transition: all .2s linear;
      }
  }
}
</style>
