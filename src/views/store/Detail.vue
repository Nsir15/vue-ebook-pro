<template>
  <transition name="slide-right">
    <div class="book-detail">
      <detail-title @back="handleBack"></detail-title>
      <scroll class="detail-content" :top="42" :bottom="52" ref="scroll">
        <div v-for="(item,index) in 100" :key="index">{{index}}</div>
      </scroll>
      <div class="detail-toolbar">
        <div class="bottom-btn">{{$t('detail.read')}}</div>
        <div class="bottom-btn">{{$t('detail.listen')}}</div>
        <div class="bottom-btn">{{$t('detail.isAddedToShelf')}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
import DetailTitle from '@/components/detail/DetailTitle'
import Scroll from '@/components/common/Scroll'
export default {
  components: {
    DetailTitle,
    Scroll
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    handleBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/global.scss";
.book-detail {
  height: 100%;
  background: white;
  .detail-content {
  }
  .detail-toolbar {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    bottom: 0;
    height: px2rem(52);
    display: flex;
    background: white;
    box-shadow: 0 px2rem(-2) px2rem(2) rgba(0, 0, 0, 0.1);
    .bottom-btn {
      flex: 1;
      @include center;
      color: $color-blue;
      font-weight: bold;
      font-size: px2rem(14);
    }
  }
}
</style>
