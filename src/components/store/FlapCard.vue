<!--
 * @Description: 推荐的弹出动画
 * @Author: MRNAN
 * @Date: 2020-07-20 10:49:06
 * @LastEditTime: 2020-07-20 21:31:17
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/components/store/FlapCard.vue
-->
<template>
 <div class="flap-card-wrapper">
   <div class="flap-card-bg">
     <div class="flap-card" v-for="(item,index) in flapCardList" :key="index">
       <div class="flap-card-semi-circle-left" :style="semiCircleStyle(item,'left')" ref="left"></div>
       <div class="flap-card-semi-circle-right" :style="semiCircleStyle(item,'right')" ref="right"></div>
     </div>
   </div>
   <div class="flap-card-close" @click="handleClose">
     <span class="icon-close"></span>
   </div>
 </div>
</template>

<script>

import { storeHomeMixin } from '../../utils/mixin'

const KFRONT = 'front'
const kBACKGROUND = 'background'
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
      ],
      frontIndex: 0, // 默认正面的下标
      backIndex: 1 // 默认背面的开始下标
    }
  },
  computed: {},
  created () {

  },
  mounted () {
    this.startFlapCardAnimation()
  },
  methods: {
    handleClose () {
      this.setFlapCardVisible(false)
    },
    // 动态绑定style的
    semiCircleStyle (item, direction) {
      return {
        backgroundColor: `rgb(${item.r},${item.g},${item.b})`,
        backgroundSize: item.backgroundSize,
        zIndex: item.zIndex,
        backgroundImage: direction === 'left' ? item.imgLeft : item.imgRight
      }
    },

    rotate (index, type) {
      const item = this.flapCardList[index]
      let dom = null
      if (type === KFRONT) {
        dom = this.$refs.right[index]
      } else {
        dom = this.$refs.left[index]
      }
      dom.style.backgroundColor = `rgb(${item.r},${item._g},${item.b})`
      dom.style.transform = `rotateY(${item.rotateDegree}deg)`
    },
    prepare () {
      // 因为backCard.rotateDegree 默认是0 ，-=10 一直是负值。动画初始装状态应该将back 先转 180度
      const backCard = this.flapCardList[this.backIndex]
      backCard.rotateDegree = 180
      this.rotate(this.backIndex, kBACKGROUND)
    },
    startFlapCardAnimation () {
      this.prepare()
      const frontCard = this.flapCardList[this.frontIndex]
      const backCard = this.flapCardList[this.backIndex]
      this.flapTask = setInterval(() => {
        frontCard.rotateDegree += 10
        backCard.rotateDegree -= 10
        if (frontCard.rotateDegree === 90 && backCard.rotateDegree === 90) {
          // 前面已经转到了90度，背面也转到了90度，此时需要切换index ,让背面开始显示出来
          backCard.zIndex += 2
        }
        this.rotate(this.frontIndex, KFRONT)
        this.rotate(this.backIndex, kBACKGROUND)
      }, 1000)
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
        // 默认是以图片中心轴开始转，这里设置绕右侧转
        transform-origin: right;
        // 转到背面隐藏
        backface-visibility: hidden;
      }
      .flap-card-semi-circle-right{
        flex: 0 0 50%;
        background-repeat: no-repeat;
        background-position: left center;
        border-radius: 0 px2rem(24) px2rem(24) 0;
        transform-origin: left;
        backface-visibility: hidden;
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
