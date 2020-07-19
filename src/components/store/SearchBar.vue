<!--
 * @Description:
 * @Author: MRNAN
 * @Date: 2020-07-16 20:51:21
 * @LastEditTime: 2020-07-19 16:19:01
 * @LastEditors: MRNAN
 * @FilePath: /Vue-ebook-pro/src/components/store/SearchBar.vue
-->
<template>
<div>
  <div class="search-bar" :class="{'title-hidden' : !titleVisible,'hide-shadow':!shadowVisible }">
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
    <div class="title-icon-back-wrapper" :class="{'title-hidden':!titleVisible}" @click="handleBack">
      <span class="icon-back"></span>
    </div>
    <div class="search-bar-input-wrapper" :class="{'title-hidden':!titleVisible}">
      <!-- 占位，占据左侧返回按钮的位置大小，主要是在隐藏title的时候压缩input框 -->
      <div class="search-bar-blank" :class="{'title-hidden':!titleVisible}"></div>
      <div class="search-bar-input">
        <span class="icon-search"></span>
        <input type="text" :placeholder="$t('home.hint')"  @click="handleInputClick"/>
      </div>
    </div>
  </div>
  <hot-search-list v-show="hotSearchVisible" ref="hotSearchList"></hot-search-list>
</div>
</template>

<script>
import { storeHomeMixin } from '../../utils/mixin'
import HotSearchList from '../store/HotSearchList'
export default {
  mixins: [storeHomeMixin],
  components: {
    HotSearchList
  },
  props: {},
  data () {
    return {
      titleVisible: true,
      shadowVisible: false,
      hotSearchVisible: false
    }
  },
  watch: {
    offsetY (offsetY) {
      console.log(offsetY)
      if (offsetY > 0) {
        this.hideTitle()
        this.showShadow()
      } else {
        this.showTitle()
        this.hideShadow()
      }
    },
    hotSearchOffsetY (offsetY) {
      if (offsetY > 0) {
        this.showShadow()
      } else {
        this.hideShadow()
      }
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    hideTitle () {
      this.titleVisible = false
    },

    showTitle () {
      this.titleVisible = true
    },

    showShadow () {
      this.shadowVisible = true
    },

    hideShadow () {
      this.shadowVisible = false
    },

    showHotSearch () {
      this.hotSearchVisible = true
      this.hideShadow()
      this.$nextTick(_ => {
        this.$refs.hotSearchList.reset()
      })
    },

    hideHotSearch () {
      this.hotSearchVisible = false
      if (this.offsetY > 0) {
        this.showShadow()
      } else {
        this.hideShadow()
      }
    },

    handleInputClick () {
      this.hideTitle()
      this.showHotSearch()
    },

    handleBack () {
      this.hideHotSearch()
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global";
.search-bar {
  position: relative;
  height: px2rem(96);
  font-size: px2rem(14);
  z-index: 120;
  box-shadow: 0 px2rem(2) px2rem(2) rgba(0,0,0,0.1);
  &.title-hidden {
    height: px2rem(52);
  }
  &.hide-shadow{
    box-shadow: none;
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
    z-index: 130;
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
