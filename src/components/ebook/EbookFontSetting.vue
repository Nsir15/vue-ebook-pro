<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show=" menuAndNavVisible && settingVisible === 0">
      <div class="font-setting">
        <div class="font-icon" :style="{fontSize:fontList[0].fontSize + 'px'}">A</div>
        <div class="select-container">
          <div
            class="select-wrapper"
            v-for="(item,index) in fontList"
            :key="index"
            @click="setFontSize(item.fontSize)"
          >
            <div class="line"></div>
            <div class="point-wrapper">
              <div class="point" v-show="defaultFontSize === item.fontSize">
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="font-icon" :style="{fontSize:fontList[fontList.length-1].fontSize + 'px'}">A</div>
      </div>
      <div class="setting-font-family" @click="showFontFamilyPopup">
        <div class="font-family-text-wrapper">
          <div class="font-family-text">{{defaultFontFamily}}</div>
        </div>
        <div class="font-family-icon-wrapper">
          <span class="icon-forward"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { FONT_SIZE_LIST } from '../../utils/book'

export default {
  mixins: [ebookMixin],
  components: {},
  props: {},
  data () {
    return {
      fontList: FONT_SIZE_LIST
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    setFontSize (fontSize) {
      this.setDefaultFontSize(fontSize)
      this.currentBook.rendition.themes.fontSize(fontSize)
    },
    showFontFamilyPopup () {
      this.setFontFamilyVisible(true)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global";
.setting-wrapper {
  position: absolute;
  left: 0;
  bottom: px2rem(48);
  width: 100%;
  height: px2rem(90);
  background: white;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  z-index: 101;
  display: flex;
  flex-direction: column;
  .font-setting {
    flex: 2;
    display: flex;

    .font-icon {
      flex: 0 0 px2rem(40);
      @include center;
    }

    .select-container {
      flex: 1;
      display: flex;

      .select-wrapper {
        flex: 1;
        @include center;
        &:first-child {
          .line:first-child {
            border-top: none;
          }
        }
        &:last-child {
          .line:last-child {
            border-top: none;
          }
        }
        // //这里nth-of-type 前面是 class 的话 意思是 现根据 .select-wrapper 找到对应的元素标签，这里即div 标签，然后找到父元素里面的第二个div 标签
        // &:nth-of-type(2) {
        //   // background: orange;
        //   .line:nth-child(1) {
        //     border-top: none;
        //   }
        // }
        // &:nth-of-type(2) {
        //   // background: orange;
        //   .line:nth-child(1) {
        //     border-top: none;
        //   }
        // }

        .line {
          flex: 1;
          height: 0;
          border-top: px2rem(1) solid #ccc;
        }
        .point-wrapper {
          flex: 0 0 0;
          width: 0;
          height: px2rem(7);
          border-left: px2rem(1) solid #ccc;
          position: relative;
          .point {
            position: absolute;
            left: px2rem(-10);
            top: px2rem(-8);
            width: px2rem(20);
            height: px2rem(20);
            background: white;
            box-shadow: 0 0 px2rem(8) rgba(0, 0, 0, 0.15);
            border-radius: 50%;
            @include center;
            .small-point {
              background: black;
              width: px2rem(5);
              height: px2rem(5);
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
  .setting-font-family{
    flex: 1;
    font-size: px2rem(14);
    @include center;
    .font-family-text-wrapper{
      @include center;
    }
    .font-family-icon-wrapper{
      @include center;
    }
  }
}
</style>
