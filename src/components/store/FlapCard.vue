<!--
 * @Description: 推荐的弹出动画
 * @Author: MRNAN
 * @Date: 2020-07-20 10:49:06
 * @LastEditTime: 2020-08-18 10:33:07
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/components/store/FlapCard.vue
-->
<template>
 <div class="flap-card-wrapper">
   <div class="flap-card-bg" :class="{'animation':flapCardAnimationShow}" v-show="flapCardAnimationShow">
     <div class="flap-card" v-for="(item,index) in flapCardList" :key="index" :style="{zIndex:item.zIndex}">
       <div class="flap-card-semi-circle-left" :style="semiCircleStyle(item,'left')" ref="left"></div>
       <div class="flap-card-semi-circle-right" :style="semiCircleStyle(item,'right')" ref="right"></div>
     </div>
   </div>
   <div class="point-wrapper">
     <div class="point" v-for="(item,index) in 18" :key="index"></div>
   </div>
   <div class="book-card" v-show="bookCardShow">
     <div class="img-wrapper">
       <img :src="randomBookData ? randomBookData.cover : ''" alt="">
     </div>
     <div class="content-wrapper">
       <div class="title">{{randomBookData ? randomBookData.title :''}}</div>
       <div class="author">{{randomBookData ? randomBookData.author :''}}</div>
     </div>
     <div class="read-btn" @click.stop="showBookDetail(randomBookData)">立即阅读</div>
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
  props: {
    randomBookData: Object
  },
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
      flapCardAnimationShow: false,
      frontIndex: 0, // 默认正面的下标
      backIndex: 1, // 默认背面的开始下标
      bookCardShow: false
    }
  },
  watch: {
    flapCardVisible (value) {
      if (value) {
        // flapcard 出场动画会执行.3s,等出场之后再开始执行翻转动画

        this.startTimeout = setTimeout(() => {
          this.startFlapCardAnimation()
        }, 300)
      }
    }
  },
  computed: {},
  created () {

  },
  mounted () {
    // 书城首页刚加载就会加载这里，不能在这里开启动画
    // this.startFlapCardAnimation()
  },
  methods: {
    handleClose () {
      this.setFlapCardVisible(false)
      this.flapCardAnimationShow = false
      this.bookCardShow = false
      if (this.flapTask) {
        clearInterval(this.flapTask)
      }

      // 将 timeout 也清除掉。不然在卡片翻转动画过程中点击关闭。会导致再次进来时直接显示了推荐book的Card 等奇怪问题。
      // 主要原因就是因为关闭的时候虽然将状态都初始化了。但是timeout 异步任务可能还在排队等待中，到了时间又会将状态值修改
      if (this.startTimeout) {
        clearTimeout(this.startTimeout)
      }
      if (this.stopTimeout) {
        clearTimeout(this.stopTimeout)
      }
      this.reset()
    },
    // 动态绑定style的
    semiCircleStyle (item, direction) {
      return {
        backgroundColor: `rgb(${item.r},${item.g},${item.b})`,
        backgroundSize: item.backgroundSize,
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
      backCard._g = backCard._g - 5 * 18
      this.rotate(this.backIndex, kBACKGROUND)
    },
    next () {
      // 复原
      const frontCard = this.flapCardList[this.frontIndex]
      const backCard = this.flapCardList[this.backIndex]
      frontCard._g = frontCard.g
      backCard._g = backCard.g
      frontCard.rotateDegree = 0
      backCard.rotateDegree = 0
      this.rotate(this.frontIndex, KFRONT)
      this.rotate(this.backIndex, kBACKGROUND)

      // 继续
      this.frontIndex++
      if (this.frontIndex >= this.flapCardList.length) {
        this.frontIndex = 0
      }
      this.backIndex++
      if (this.backIndex >= this.flapCardList.length) {
        this.backIndex = 0
      }

      // 更新zIndex
      /**
       * 100 -- 96
       * 99 -- 100
       * 98 -- 99
       * 97 -- 98
       * 96 -- 97
       */
      this.flapCardList.forEach((item, index) => {
        item.zIndex = 100 - ((index - this.frontIndex + this.flapCardList.length) % this.flapCardList.length)
      })

      this.prepare()
    },
    flapCardRotate () {
      const frontCard = this.flapCardList[this.frontIndex]
      const backCard = this.flapCardList[this.backIndex]

      frontCard.rotateDegree += 10
      backCard.rotateDegree -= 10
      frontCard._g -= 5
      backCard._g += 5
      if (frontCard.rotateDegree === 90 && backCard.rotateDegree === 90) {
        // 前面已经转到了90度，背面也转到了90度，此时需要切换index ,让背面开始显示出来
        backCard.zIndex += 2
      }
      this.rotate(this.frontIndex, KFRONT)
      this.rotate(this.backIndex, kBACKGROUND)

      if (frontCard.rotateDegree === 180 && backCard.rotateDegree === 0) {
        this.next()
      }
    },
    startFlapCardAnimation () {
      this.flapCardAnimationShow = true
      this.prepare()
      this.flapTask = setInterval(() => {
        this.flapCardRotate()
      }, 45)

      this.stopTimeout = setTimeout(() => {
        this.stopFlapCardAnimation()
        this.bookCardShow = true
      }, 2500)
    },
    stopFlapCardAnimation () {
      this.flapCardAnimationShow = false
      if (this.flapTask) {
        clearInterval(this.flapTask)
      }
      this.reset()
    },
    reset () {
      this.frontIndex = 0
      this.backIndex = 1
      this.flapCardList.forEach((item, index) => {
        item._g = item.g
        item.rotateDegree = 0
        item.zIndex = 100 - index
        this.rotate(index, KFRONT)
        this.rotate(index, kBACKGROUND)
      })
    },

    showBookDetail (book) {
      console.log('showBookDetail')
      // this.$router.replace()
      this.$router.push({
        path: 'detail',
        query: {
          fileName: book.fileName,
          category: book.categoryText
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global';
@import '../../assets/styles/flapCardPoint';

.flap-card-wrapper{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  background: rgba(0,0,0,0.6);
  @include center;
  .flap-card-bg{
    border-radius: px2rem(5);
    background: white;
    width: px2rem(64);
    height: px2rem(64);
    transform: scale(0);
    opacity: 0;
    @include absCenter;
    &.animation{
      // 这里both 是关键，不然bg 会出现一次动画，然后又消失了，回到了初始转态
      animation: scale .3s ease-in 1 both;
      @keyframes scale {
        0% {
          opacity: 0;
          transform: scale(0);
        }
        60% {
          opacity: 1;
          transform: scale(1.3);
        }

        100%{
          opacity: 1;
          transform: scale(1);
        }
      }
    }

    .flap-card{
      width: px2rem(48);
      height: px2rem(48);
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

  .point-wrapper{
    position: absolute;
    left: 50%;
    top: 50%;
    .point{
      border-radius: 50%;
      transform: scale(0);
      @include absCenter;
      @for $i from 1 through length($moves){
        &:nth-child(#{$i}){
          @include move($i)
        }
      }
    }
  }

  .book-card{
    background: white;
    border-radius:px2rem(15);
    width: 60%;
    @include columnTop;
    transform: scale(0);
    opacity: 0;
    animation: move .3s ease-in  1  both;
    @keyframes move {
      0%{
        opacity: 0;
        transform: scale(0);
      }

      60%{
        opacity: 0.6;
        transform: scale(0.6);
      }

      100%{
        opacity: 1;
        transform: scale(1);
      }
    }
    .img-wrapper{
      margin-top:px2rem(10);
      width: 100%;
      @include center;
      img{
        height: px2rem(130);
        width: px2rem(90);
      }
    }
    .content-wrapper{
      box-sizing: border-box;
      padding: px2rem(10);
      width: 100%;
      text-align: center;
      .title{
        color: #333;
        font-size: px2rem(18);
        font-weight: 600;
        line-height: px2rem(20);
        max-height: px2rem(40);
        @include ellipsis2(2);
      }
      .author{
        margin-top: px2rem(10);
        font-size: px2rem(14);
      }
    }
    .read-btn{
      text-align: center;
      width: 100%;
      height: px2rem(44);
      line-height: px2rem(44);
      background: #4aabff;
      color: white;
      font-size: px2rem(15);
      font-weight: 600;
      border-radius: 0 0 px2rem(15) px2rem(15);
      cursor: pointer;
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
