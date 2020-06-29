<template>
  <div class="ebook-menu">
    <transition name="slide-up">
      <div
        class="menu-wrapper"
        v-show="menuAndNavVisible"
        :class="{'hide-shadow':settingVisible >= 0}"
      >
        <div class="icon-wrapper" @click="showSetting(3)">
          <span class="icon-menu"></span>
        </div>
        <div class="icon-wrapper" @click="showSetting(2)">
          <span class="icon-progress"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-a" @click="showSetting(0)">A</span>
        </div>
      </div>
    </transition>
    <ebook-font-setting></ebook-font-setting>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import EbookFontSetting from '../../components/ebook/EbookFontSetting'

export default {
  mixins: [ebookMixin],
  components: {
    EbookFontSetting
  },
  props: {},
  data () {
    return {}
  },
  computed: {
  },
  created () {},
  mounted () {},
  methods: {
    showSetting (tag) {
      this.setSettingVisible(tag)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global";

.ebook-menu{
   .menu-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: px2rem(48);
    z-index: 110;
    background: white;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    display: flex;
    font-size: px2rem(20);
    &.hide-shadow {
      box-shadow: none;
    }
    .icon-wrapper {
      @include center;
      flex: 1;

      .icon-progress {
        font-size: px2rem(28);
      }
    }
  }
}
</style>
