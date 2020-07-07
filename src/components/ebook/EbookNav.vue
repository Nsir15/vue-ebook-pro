<template>
  <div class="ebook-nav">
    <transition name="slide-down">
      <div class="title-wrapper"  v-show="menuAndNavVisible">
        <div class="left">
          <div class="icon-wrapper">
            <span class="icon-back"></span>
          </div>
        </div>
        <div class="right">
          <div class="icon-wrapper">
            <span class="icon-shelf"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-cart"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-more"></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
export default {
  mixins: [ebookMixin],
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {
  },

  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global";
.title-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: px2rem(48);
  z-index: 110;
  background: white;
  display: flex;
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
  font-size: px2rem(30);
  .left {
    flex: 0 0 px2rem(50);
    display: flex;
    .icon-wrapper {
      @include center;
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .icon-wrapper {
      flex: 0 0 px2rem(40); // 每个icon的固定宽度40
      @include center;
    }
  }
}
</style>
