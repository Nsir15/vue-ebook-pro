<!--
 * @Description:
 * @Author: MRNAN
 * @Date: 2020-07-16 20:51:21
 * @LastEditTime: 2020-07-18 17:50:11
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/components/store/SearchBar.vue
-->
<template>
  <div class="search-bar" :class="{'title-hidden' : !titleVisible }">
    <transition name="title-fade">
      <div class="search-bar-title-wrapper" v-show="titleVisible">
        <div class="title-text-wrapper">
          <span class="title-text-title">{{$t('home.title')}}</span>
        </div>
        <div class="title-icon-shake-wrapper">
          <span class="icon-shake"></span>
        </div>
      </div>
    </transition>
    <div class="title-icon-back-wrapper" :class="{'title-hidden':!titleVisible}">
      <span class="icon-back"></span>
    </div>
    <div class="search-bar-input-wrapper" :class="{'title-hidden':!titleVisible}">
      <!-- 占位，占据左侧返回按钮的位置大小，主要是在隐藏title的时候压缩input框 -->
      <div class="search-bar-blank" :class="{'title-hidden':!titleVisible}"></div>
      <div class="search-bar-input">
        <span class="icon-search"></span>
        <input type="text" :placeholder="$t('home.hint')" />
      </div>
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
      titleVisible: true
    }
  },
  watch: {
    offsetY (offsetY) {
      console.log(offsetY)
      if (offsetY > 0) {
        this.titleVisible = false
      } else {
        this.titleVisible = true
      }
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global";
.search-bar {
  position: relative;
  height: px2rem(96);
  font-size: px2rem(14);
  z-index: 120;
  &.title-hidden {
    height: px2rem(52);
  }
  .search-bar-title-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: px2rem(42);
    font-size: px2rem(14);
    .title-text-wrapper {
      line-height: px2rem(42);
      width: 100%;
      @include center;
    }
    .title-icon-shake-wrapper {
      position: absolute;
      right: px2rem(15);
      top: 0;
      height: 100%;
      @include center;
    }
  }
  .title-icon-back-wrapper {
    position: absolute;
    left: px2rem(17);
    top: 0;
    height: px2rem(42);
    @include center;
    transition: height .2s linear;
    &.title-hidden{
      height: px2rem(52);
    }
  }
  .search-bar-input-wrapper {
    width: 100%;
    position: absolute;
    left: 0;
    top: px2rem(42);
    padding: px2rem(10);
    box-sizing: border-box;
    transition: top .2s linear;
    display: flex;
    &.title-hidden{
      top: 0;
    }
    .search-bar-blank{
      flex: 0;
      transition: all .2s linear;
      &.title-hidden{
        flex: 0 0 px2rem(31);
      }
    }
    .search-bar-input {
      flex: 1;
      background: #f4f4f4;
      border-radius: px2rem(20);
      padding: px2rem(5) px2rem(15);
      box-sizing: border-box;
      @include left;
      .icon-search {
        font-size: px2rem(16);
      }
      input {
        border: none;
        background: transparent;
        height: px2rem(22);
        margin-left: px2rem(10);
        &:focus {
          outline: none;
        }
        &::-webkit-input-placeholder {
          color: #ccc;
        }
      }
    }
  }
}
</style>
