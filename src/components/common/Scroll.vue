<template>
 <div class="scroll-wrapper" @scroll.passive="handleScroll" ref="scrollWrapper">
   <slot></slot>
 </div>
</template>

<script>
import { realPx } from '../../utils/util'

export default {
  components: {},
  props: {
    top: {
      type: Number,
      default: 0
    },
    bottom: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {

    }
  },
  computed: {},
  created () {

  },
  mounted () {
    this.init()
  },
  methods: {
    handleScroll (e) {
      console.log(e)
    },

    init () {
      if (this.$refs.scrollWrapper) {
        this.$refs.scrollWrapper.style.height = window.innerHeight - realPx(this.top) - realPx(this.bottom) + 'px'
        this.$refs.scrollWrapper.addEventListener('scroll', this.handleScroll)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global';
.scroll-wrapper{
  position: relative;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 100;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar{
    display: none;
  }
}
</style>
