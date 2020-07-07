<template>
  <div class="ebook-slide-contents">
    <div class="slide-contents-search-wrapper">
      <div class="slide-contents-search-input-wrapper">
        <span class="icon-search"></span>
        <input type="text" v-model="searchText" class="slide-contents-search-input" @click="showSearchPage" :placeholder="$t('book.searchHint')" @keyup.enter.exact="handleSearch">
      </div>
      <div v-if="searchPageVisible" class="slide-contents-search-cancel" @click="handleCancel">{{$t('book.cancel')}}</div>
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
      class="slide-contents-list"
      :top='166'
      :bottom='48'
      v-show="!searchPageVisible">
      <div class="slide-contents-item" v-for="(item,index) in navigation" :key="index">
        <span class="slide-contents-item-label" :class="{'selected': section === index}" :style="catalogueStyle(item)" @click="displayContent(item.href)">{{item.label}}</span>
        <span class="slide-contents-item-page">{{item.page}}</span>
      </div>
    </scroll>
    <scroll class="slide-search-list"
      :top='76'
      :bottom='48'
      v-show="searchPageVisible">
      <div class="slide-search-item" v-for="(item,index) in searchList" :key="index" v-html="item.excerpt" @click="displayContent(item.cfi,true)">
      </div>
    </scroll>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import Scroll from '../common/Scroll'
import { px2rem } from '../../utils/util'

export default {
  mixins: [ebookMixin],
  components: {
    Scroll
  },
  props: {},
  data () {
    return {
      searchEnable: false,
      searchPageVisible: false,
      searchText: '',
      searchList: []
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
      this.searchList = []
      this.searchText = ''
      this.searchPageVisible = false
    },
    showSearchPage () {
      this.searchPageVisible = true
    },
    catalogueStyle (item) {
      return {
        marginLeft: `${px2rem(item.level * 15)}rem`
      }
    },
    displayContent (href, highlight = false) {
      this.display(href, _ => {
        this.setSettingVisible(-1)
        this.setMenuAndNavVisible(false)
        // 搜索关键字高亮显示
        if (highlight) {
          this.currentBook.rendition.annotations.highlight(href)
        }
      })
    },
    doSearch (q) {
      return Promise.all(
        this.currentBook.spine.spineItems.map(item => item.load(this.currentBook.load.bind(this.currentBook))
          .then(item.find.bind(item, q))
          .finally(item.unload.bind(item)))
      ).then(results => Promise.resolve([].concat.apply([], results)))
    },
    handleSearch () {
      if (!this.searchText) return
      const that = this
      this.doSearch(this.searchText).then(res => {
        console.log('searchList', res)
        that.searchList = res

        // 搜索关键词高亮显示
        that.searchList.forEach(item => {
          item.excerpt = item.excerpt.replace(that.searchText, `<span class="content-search-text">${that.searchText}</span>`)
        })
      })
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

  .slide-contents-list{
    padding: px2rem(15);
    box-sizing: border-box;
    .slide-contents-item{
      font-size: px2rem(14);
      padding: px2rem(15) 0;
      box-sizing: border-box;
      display: flex;
      .slide-contents-item-label{
        flex: 1;
        line-height: px2rem(16);
        @include ellipsis;
      }
      .slide-contents-item-page{
        flex: 0 0 px2rem(30);
      }
    }
  }

  .slide-search-list{
    padding: px2rem(15);
    box-sizing: border-box;
    .slide-search-item{
      font-size: px2rem(14);
      padding: px2rem(15) 0;
      box-sizing: border-box;
    }
  }
}
</style>
