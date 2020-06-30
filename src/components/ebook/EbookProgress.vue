<template>
 <transition name="slide-up">
    <div class="setting-wrapper" v-show=" menuAndNavVisible && settingVisible === 2">
      <div class="progress-setting">
          <div class="progress-wrapper">
            <input class="progress"
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    @change="onProgressChange($event.target.value)"
                    @input="onProgressInput($event.target.value)"
                    :disabled='!bookAvailable'
                    :value="progress"
                    ref='progress'>
          </div>
          <div class="progress-title">
            <span>{{this.bookAvailable ? progress + '%' : '加载中...'}}</span>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
export default {
  mixins: [ebookMixin],
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
    onProgressChange (progress) {},
    onProgressInput (progress) {}

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
    z-index: 110;

    .progress-setting{
      display: flex;
      flex-direction: column;
      height: 100%;
      .progress-wrapper{
        flex: 1;
        @include center;
        .progress{
          width: 100%;
          height: px2rem(2);
          appearance: none;
          background: -webkit-linear-gradient(#999,#999) no-repeat,#ddd;
          background-size: 0 100%;
          &:focus{
            outline: none;
          }
          &::-webkit-slider-thumb{
            appearance: none;
            height: px2rem(20);
            width: px2rem(20);
            border-radius: 50%;
            background: white;
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
            border:px2rem(1) solid #ddd;
          }
        }
      }
      .progress-title{
        font-size: px2rem(11);
        @include center;
      }
    }
  }

</style>
