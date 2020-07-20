<!--
 * @Description: 推荐的弹出动画
 * @Author: MRNAN
 * @Date: 2020-07-20 10:49:06
 * @LastEditTime: 2020-07-20 16:50:15
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/components/store/FlapCard.vue
-->
<template>
 <div class="flap-card-wrapper">
   <div class="flap-card-bg">
     <div class="flap-card" v-for="(item,index) in flapCardList" :key="index">
       <div class="flap-card-semi-circle-left" :style="semiCircleStyle(item,'left')"></div>
       <div class="flap-card-semi-circle-right" :style="semiCircleStyle(item,'right')"></div>
     </div>
   </div>
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
      flapCardList: [
        {
          r: 255,
          g: 102,
          _g: 102,
          b: 159,
          imgLeft: 'url(' + require('@/assets/images/gift-left.png') + ')',
          imgRight: 'url(' + require('@/assets/images/gift-right.png') + ')',
          backgroundSize: '50% 50%',
          zIndex: 100,
          rotateDegree: 0
        },
        {
          r: 74,
          g: 171,
          _g: 171,
          b: 255,
          imgLeft: 'url(' + require('@/assets/images/compass-left.png') + ')',
          imgRight: 'url(' + require('@/assets/images/compass-right.png') + ')',
          backgroundSize: '50% 50%',
          zIndex: 99,
          rotateDegree: 0
        },
        {
          r: 255,
          g: 198,
          _g: 198,
          b: 102,
          imgLeft: 'url(' + require('@/assets/images/star-left.png') + ')',
          imgRight: 'url(' + require('@/assets/images/star-right.png') + ')',
          backgroundSize: '50% 50%',
          zIndex: 98,
          rotateDegree: 0
        },
        {
          r: 255,
          g: 102,
          _g: 102,
          b: 159,
          imgLeft: 'url(' + require('@/assets/images/heart-left.png') + ')',
          imgRight: 'url(' + require('@/assets/images/heart-right.png') + ')',
          backgroundSize: '50% 50%',
          zIndex: 97,
          rotateDegree: 0
        },
        {
          r: 59,
          g: 201,
          _g: 201,
          b: 22,
          imgLeft: 'url(' + require('@/assets/images/crown-left.png') + ')',
          imgRight: 'url(' + require('@/assets/images/crown-right.png') + ')',
          backgroundSize: '50% 50%',
          zIndex: 96,
          rotateDegree: 0
        }
      ]
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
    },
    semiCircleStyle (item, direction) {
      return {
        backgroundColor: `rgb(${item.r},${item.g},${item.b})`,
        backgroundSize: item.backgroundSize,
        zIndex: item.zIndex,
        backgroundImage: direction === 'left' ? item.imgLeft : item.imgRight
      }
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

  .flap-card-bg{
    border-radius: px2rem(5);
    background: white;
    width: px2rem(64);
    height: px2rem(64);
    @include absCenter;
    .flap-card{
      width: px2rem(48);
      height: px2rem(48);
      background:orange;
      @include absCenter;
      display: flex;
      .flap-card-semi-circle-left{
        flex: 0 0 50%;
        background-repeat: no-repeat;
        background-position: right center;
        border-radius: px2rem(24) 0 0 px2rem(24);
      }
      .flap-card-semi-circle-right{
        flex: 0 0 50%;
        background-repeat: no-repeat;
        background-position: left center;
        border-radius: 0 px2rem(24) px2rem(24) 0;
      }
    }
  }
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
