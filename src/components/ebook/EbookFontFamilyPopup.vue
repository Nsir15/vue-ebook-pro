<template>
  <transition name="popup-slide-up">
    <div class="font-family-popup" v-show="fontFamilyVisible">
      <div class="font-family-popup-title">
        <div class="popup-title-icon" @click="dismissPopup">
          <span class="icon-down2"></span>
        </div>
        <div class="popup-title-text">设置字体</div>
      </div>
      <div class="font-family-popup-list">
        <div
          class="font-family-list-item"
          v-for="(item,index) in fontFamilyList"
          :key="index"
          @click="setFontFamily(item.font)">
          <div
            class="font-family-list-item-text"
            :class="{'selected':item.font === defaultFontFamily}">{{item.font}}</div>
          <div class="font-family-list-item-icon" v-if="item.font === defaultFontFamily">
            <span class="icon-check"></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { FONT_FAMILY } from '../../utils/book'

export default {
  mixins: [ebookMixin],
  components: {},
  props: {},
  data () {
    return {
      fontFamilyList: FONT_FAMILY
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    dismissPopup () {
      this.setFontFamilyVisible(false)
    },
    setFontFamily (fontFamily) {
      this.setDefaultFontFamily(fontFamily)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global";

.font-family-popup {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  // height: px2rem(200);
  background: white;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  z-index: 120;
  .font-family-popup-title {
    position: relative;
    padding: px2rem(15);
    box-sizing: border-box;
    border-bottom: px2rem(1) solid #ccc;
    @include center;
    .popup-title-icon {
      position: absolute;
      left: px2rem(15);
      top: 0;
      height: 100%;
      font-size: px2rem(16);
      font-weight: bolder;
      @include center;
    }
    .popup-title-text {
      font-size: px2rem(14);
      font-weight: bolder;
    }
  }
  .font-family-popup-list {
    padding: px2rem(10);
    .font-family-list-item {
      display: flex;
      padding: px2rem(15);
      // @include center;
      .font-family-list-item-text {
        flex: 1;
        font-size: px2rem(15);
        &.selected {
          color: aqua;
          font-weight: bolder;
        }
      }
      .font-family-list-item-icon {
        flex: 1;
        color: aqua;
        text-align: right;
        font-weight: bolder;
        font-size: px2rem(14);
      }
    }
  }
}
</style>
