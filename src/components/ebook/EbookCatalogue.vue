<template>
  <div class="ebook-slide-contents">
    <div class="slide-contents-search-wrapper">
      <div class="slide-contents-search-input-wrapper">
        <span class="icon-search"></span>
        <input type="text" class="slide-contents-search-input" @click="showSearchPage" :placeholder="$t('book.searchHint')">
      </div>
      <div v-if="searchEnable" class="slide-contents-search-cancel" @click="handleCancel">{{$t('book.cancel')}}</div>
    </div>
    <div class="slide-contents-book-wrapper" v-show="!searchPageVisible">
      <div class="slide-contents-book-img-wrapper">
        <img :src="cover" alt="" class="slide-contents-book-img">
      </div>
      <div class="slide-contents-book-info-wrapper">
        <span class="slide-contents-book-title-text">{{ metadata?metadata.title:''}}</span>
        <span class="slide-contents-book-author-text">{{metadata?metadata.creator:''}}</span>
      </div>
      <div class="slide-contents-book-progress-wrapper">
        <div class="slide-contents-book-progress">
          <span class="progress">{{progress + '% '}}</span>
          <span class="progress-text">{{$t('book.haveRead2')}}</span>
        </div>
        <div class="slide-contents-book-time">{{getReadTime}}</div>
      </div>
    </div>
    <scroll
      :top='166'
      :bottom='48'>
    </scroll>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import Scroll from '../common/Scroll'

export default {
  mixins: [ebookMixin],
  components: {
    Scroll
  },
  props: {},
  data () {
    return {
      searchEnable: false,
      searchPageVisible: false
    }
  },
  computed: {
    getReadTime () {
      return this.$t('book.haveRead').replace('$1', this.readTime)
    }
  },
  created () {},
  mounted () {
  },
  methods: {
    handleCancel () {
      this.searchEnable = false
    },
    showSearchPage () {
      this.searchEnable = true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global" ;
.ebook-slide-contents {
  width: 100%;
  height: 100%;
  .slide-contents-search-wrapper{
    width: 100%;
    height: px2rem(36);
    display: flex;
    font-size: px2rem(14);
    padding: 0 px2rem(10);
    margin: px2rem(20) 0;
    box-sizing: border-box;
    .slide-contents-search-input-wrapper{
      flex: 1;
      @include center;
      .icon-search{
        flex: 0 0 px2rem(28);
        text-align: center;
      }
      .slide-contents-search-input{
        flex: 1;
        height: px2rem(30);
        border: none;
        background: transparent;
        &:focus{
          outline: none;
        }
      }
    }
    .slide-contents-search-cancel{
      flex: 0 0 px2rem(50);
      @include right;
    }
  }

  .slide-contents-book-wrapper{
    width: 100%;
    height: px2rem(90);
    display: flex;
    padding: px2rem(15);
    font-size: px2rem(14);
    box-sizing: border-box;
    .slide-contents-book-img-wrapper{
      flex: 0 0 px2rem(45);
      .slide-contents-book-img{
        width: px2rem(45);
        height: px2rem(60);
      }
    }
    .slide-contents-book-info-wrapper{
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 0 px2rem(10);
      overflow: hidden;
      .slide-contents-book-title-text{
        flex: 1;
        @include ellipsis;
      }
      .slide-contents-book-author-text{
        flex: 1;
        @include ellipsis;
      }
    }

    .slide-contents-book-progress-wrapper{
      flex: 0 0 px2rem(100);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .slide-contents-book-progress{
        flex: 1;
        .progress{
          font-size: px2rem(14);
        }
        .progress-text{
          font-size: px2rem(12);
        }
      }
      .slide-contents-book-time{
        flex: 1;
        margin-top: px2rem(5);
      }
    }
  }
}
</style>
