<template>
<transition name="fade">
 <div class="slide-content-wrapper" v-show="settingVisible === 3" @click="hideSlide">
   <transition name="slide-right">
    <div class="content" v-show="settingVisible === 3">
      <div class="content-page-wrapper" v-if="bookAvailable">
        <div class="content-page">
          <component :is="currentTab === 1 ? catalogue : bookmark"></component>
        </div>
        <div class="content-page-tab">
          <div class="content-page-tab-item" :class="{'selected':currentTab === 1}" @click="selectTab(1)">{{$t('book.navigation')}}</div>
          <div class="content-page-tab-item" :class="{'selected':currentTab === 2}" @click="selectTab(2)">{{$t('book.bookmark')}}</div>
        </div>
      </div>
      <div class="content-empty" v-else>
        <ebook-loading></ebook-loading>
      </div>
    </div>
   </transition>
 </div>
</transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import EbookCatalogue from './EbookSlideCatalogue'
import EbookBookmark from './EbookSlideBookmark'
import EbookLoading from './EbookLoading'
export default {
  mixins: [ebookMixin],
  components: {
    EbookLoading
  },
  props: {},
  data () {
    return {
      catalogue: EbookCatalogue,
      bookmark: EbookBookmark,
      currentTab: 1
    }
  },
  computed: {},
  created () {

  },
  mounted () {

  },
  methods: {
    hideSlide (event) {
      const target = event.target
      if ([].indexOf.call(target.classList, 'slide-content-wrapper') > -1) {
        this.setSettingVisible(-1)
      }
    },
    selectTab (index) {
      this.currentTab = index
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global';

.slide-content-wrapper{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 130;

  .content{
    width: 80%;
    height: 100%;
    .content-page-wrapper{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .content-page{
        width: 100%;
        flex: 1;
      }
      .content-page-tab{
        font-size: px2rem(14);
        width: 100%;
        height: px2rem(48);
        flex: 0 0 px2rem(48);
        display: flex;
        .content-page-tab-item{
          @include center;
          flex: 1;
        }
      }
    }

    .content-empty{
      width: 100%;
      height: 100%;
      @include center;
    }
  }

}
</style>
