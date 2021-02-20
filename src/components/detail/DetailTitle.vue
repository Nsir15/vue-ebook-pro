<template>
 <div class="detail-title">
   <div class="title-left-wrapper">
     <span class="icon-back" @click="back"></span>
   </div>
   <div class="title-wrapper"></div>
   <div class="title-right-wrapper">
     <span class="icon-shelf"></span>
   </div>
 </div>
</template>

<script>
export default {
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
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/global.scss';

.detail-title{
  display: flex;
  font-size: px2rem(20);
  height: px2rem(42);
  background: white;
  box-shadow: px2rem(0) px2rem(2) px2rem(2) rgba(0,0,0,.1);
  &.hide-shadow{
    box-shadow: none;
  }
  .title-left-wrapper{
    flex: 1;
    margin-left: px2rem(10);
    @include left;
  }
  .title-wrapper{

  }
  .title-right-wrapper{
    flex: 1;
    margin-right: px2rem(10);
    @include right;
  }
}
</style>
