<template>
 <transition name="slide-up">
    <div class="setting-wrapper" v-show=" menuAndNavVisible && settingVisible === 2">
      <div class="setting-progress">
          <div class="progress-wrapper">
            <div class="progress-icon-wrapper" @click="prevSection()">
              <span class="icon-back"></span>
            </div>
            <input class="progress"
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    @change="onProgressChange($event.target.value)"
                    @input="onProgressInput($event.target.value)"
                    :disabled='!bookAvailable'
                    :value="progress"
                    ref='progress'>
            <div class="progress-icon-wrapper" @click="nextSection()">
              <span class="icon-forward"></span>
            </div>
          </div>
          <div class="progress-title">
            <span>{{this.bookAvailable ? progress + '%' : '加载中...'}}</span>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
export default {
  mixins: [ebookMixin],
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
  updated () {
    this.updateProgressBackground()
  },
  methods: {
    displaySection () {
      const sectionInfo = this.currentBook.section(this.section)
      if (sectionInfo && sectionInfo.href) {
        this.currentBook.rendition.display(sectionInfo.href)
      }
    },
    prevSection () {
      if (this.section > 0 && this.bookAvailable) {
        this.setSection(this.section - 1).then(_ => {
          this.displaySection()
        })
      }
    },
    nextSection () {
      if (this.section < this.currentBook.spine.length - 1 && this.bookAvailable) {
        this.setSection(this.section + 1).then(_ => {
          this.displaySection()
        })
      }
    },
    updateProgressBackground () {
    // 更新input进度背景样式
      this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`
    },
    // 手指停止拖动的时候
    onProgressChange (progress) {
      const location = this.currentBook.locations.cfiFromPercentage(progress / 100)
      this.currentBook.rendition.display(location)
    },
    // 手指拖动的时候
    onProgressInput (progress) {
      this.setProgress(progress)
      this.updateProgressBackground()
    }

  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global';

.setting-wrapper {
    position: absolute;
    left: 0;
    bottom: px2rem(48);
    width: 100%;
    height: px2rem(90);
    background: white;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    z-index: 110;

    .setting-progress{
      display: flex;
      flex-direction: column;
      height: 100%;
      .progress-wrapper{
        flex: 1;
        @include center;
        .progress-icon-wrapper{
          font-size: px2rem(18);
        }
        .progress{
          width: 100%;
          height: px2rem(2);
          appearance: none;
          margin: 0 px2rem(10);
          // background: -webkit-linear-gradient(#999,#999) no-repeat,#ddd;
          // background-size: 0 100%;
          &:focus{
            outline: none;
          }
          &::-webkit-slider-thumb{
            appearance: none;
            height: px2rem(20);
            width: px2rem(20);
            border-radius: 50%;
            background: white;
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
            border:px2rem(1) solid #ddd;
          }
        }
      }
      .progress-title{
        font-size: px2rem(11);
        @include center;
      }
    }
  }

</style>
