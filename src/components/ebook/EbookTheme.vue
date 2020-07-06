<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show=" menuAndNavVisible && settingVisible === 1">
      <div class="setting-theme">
        <div
          class="setting-theme-item"
          v-for="(item,index) in themeList"
          :key="index"
          @click="setTheme(index)">
          <div
            class="preview"
            :style="{background:item.style.body.background}"
            :class="{'selected':item.name === defaultTheme}">
          </div>
          <div class="text" :class="{'selected':item.name === defaultTheme}">{{item.name}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { ebookMixin } from '../../utils/mixin'
import { saveTheme } from '../../utils/localStorage'

export default {
  mixins: [ebookMixin],
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {

  },
  created () {},
  mounted () {},
  methods: {
    setTheme (index) {
      const theme = this.themeList[index].name
      this.setDefaultTheme(theme).then(() => {
        this.currentBook.rendition.themes.select(theme)
        saveTheme(this.fileName, theme)
        this.initGlobalStyle()
      })
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
    z-index: 101;

    .setting-theme {
      height: 100%;
      display: flex;

      .setting-theme-item {
        flex: 1;
        padding: px2rem(2);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: px2rem(5);
        .preview{
          flex: 1;
          border: 1px solid #ccc;
          &.selected{
            box-shadow: 0 px2rem(4) px2rem(6) 0 rgba(0, 0, 0, .1);
          }
        }
        .text {
          margin-top: px2rem(5);
          font-size: px2rem(12);
          color: #ccc;
          text-align: center;
          @include center;
          &.selected{
            color: #000;
          }
        }
      }

    }

  }
</style>
