<!--
 * @Description: 推荐的弹出动画
 * @Author: MRNAN
 * @Date: 2020-07-20 10:49:06
 * @LastEditTime: 2020-07-20 14:21:17
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/components/store/FlapCard.vue
-->
<template>
 <div class="flap-card-wrapper">
   <div class="flap-card-close" @click="handleClose">
     <span class="icon-close"></span>
   </div>
 </div>
</template>

<script>
import { storeHomeMixin } from '../../utils/mixin'
export default {
  mixins: [storeHomeMixin],
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
    handleClose () {
      this.setFlapCardVisible(false)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global';
.flap-card-wrapper{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  background: rgba(0,0,0,0.6);
  .flap-card-close{
    position: absolute;
    left: 0;
    bottom: px2rem(30);
    width: 100%;
    .icon-close{
      @include absCenter;
      border-radius: 50%;
      background: #333;
      color: white;
      width: px2rem(45);
      height: px2rem(45);
      font-size: px2rem(25);
      @include center;
    }
  }
}
</style>
