<template>
 <div class="ebook-loading">
   <div class="ebook-loading-wrapper">
     <div class="ebook-loading-item" v-for="(item,index) in items" :key="index">
       <div class="ebook-loading-line-wrapper" v-for="(subItem,subIndex) in item" :key="subIndex">
         <div class="ebook-loading-line" ref="line"></div>
       </div>
     </div>
     <div class="ebook-loading-center"></div>
   </div>
 </div>
</template>

<script>
import { px2rem } from '../../utils/util'
export default {
  components: {},
  props: {},
  data () {
    return {
      items: [
        [{}, {}, {}],
        [{}, {}, {}]
      ],
      lineWidth: [
        { value: 16 },
        { value: 16 },
        { value: 16 },
        { value: 16 },
        { value: 16 },
        { value: 16 }
      ],

      sub: true, // 开始减小
      end: false // 减小动作结束

    }
  },
  computed: {},
  created () {

  },
  mounted () {
    this.task = setInterval(_ => {
      this.$refs.line.forEach((item, index) => {
        const line = this.$refs.line[index]
        const lineWidth = this.lineWidth[index]
        // 上一个变化到宽度的一半，下个再开始
        if (index === 0) {
          if (this.sub && lineWidth.value > 0) {
          //  maskWidth.value++
            lineWidth.value--
          } else if (!this.sub && lineWidth.value < 16) {
            lineWidth.value++
          }
        } else {
          const prevLineWidth = this.lineWidth[index - 1]
          if (this.sub && lineWidth.value > 0) {
            if (prevLineWidth.value <= 8) {
              lineWidth.value--
            }
          } else if (!this.sub && lineWidth.value < 16) {
            if (prevLineWidth.value >= 8) {
              lineWidth.value++
            }
          }
        }

        line.style.flex = `0 0 ${px2rem(lineWidth.value)}rem`

        if (index === this.lineWidth.length - 1) {
          if (this.sub) { // 是减小状态
            if (lineWidth.value === 0) {
              this.end = true
            }
          } else { // 是增加状态
            if (lineWidth.value === 16) {
              this.end = true
            }
          }
        }

        // 加或者减结束了，继续反转，循环动画
        if (this.end) {
          this.sub = !this.sub
          this.end = false
        }
      })
    }, 20)
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global';

.ebook-loading{
  position: relative;
  width: px2rem(63);
  height: px2rem(40);
  z-index: 200;
  background: transparent;
  border-radius: px2rem(3);
  border: 1px solid #d7d7d7;
  .ebook-loading-wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    .ebook-loading-item{
      flex: 1;
      display: flex;
      flex-direction: column;
      .ebook-loading-line-wrapper{
        flex: 1;
        @include left;
        padding: 0 px2rem(7);
        box-sizing: border-box;
        .ebook-loading-line{
          flex: 0 0 px2rem(16);
          height: px2rem(2);
          background: #d7d7d7;
        }
      }
    }
    .ebook-loading-center{
      position:absolute;
      left: 50%;
      top: 0;
      height: 100%;
      width: 1px;
      background: #d7d7d7;
    }
  }
}
</style>
