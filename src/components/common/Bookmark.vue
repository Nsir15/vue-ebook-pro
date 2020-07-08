<!--
 * @Author: mrnan
 * @Date: 2020-07-08 10:01:26
 * @LastEditTime: 2020-07-08 15:34:55
 * @LastEditors: MRNAN
 * @Description: 书签组件
 * @FilePath: /Vue-ebook-pro/src/components/common/Bookmark.vue
-->
<template>
 <div class="bookmark" ref="bookmark" :style="style">

 </div>
</template>

<script>
import { px2rem } from '../../utils/util'

export default {
  components: {},
  props: {
    color: {
      type: String,
      default: '#fff'
    },
    height: {
      type: Number,
      default: 40
    },
    width: {
      type: Number,
      default: 15
    }
  },
  data () {
    return {

    }
  },
  computed: {
    style () {
      if (this.color) {
        return {
          borderColor: `${this.color} ${this.color} transparent ${this.color}`
        }
      } else {
        return {}
      }
    }
  },
  created () {

  },
  mounted () {
    this.initFrame()
  },
  methods: {
    initFrame () {
      if (this.width && this.height) {
        this.$refs.bookmark.style.borderWidth = `${px2rem(this.height - 10)}rem ${px2rem(this.width * 0.5)}rem ${px2rem(10)}rem ${px2rem(this.width * 0.5)}rem`
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global';
.bookmark{
  width: 0;
  height: 0;
  border-width: px2rem(30) px2rem(10) px2rem(10) px2rem(10);
  border-color: red red transparent red;
  border-style: solid;
}
</style>
