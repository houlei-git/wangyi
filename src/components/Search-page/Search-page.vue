<template>
  <div>
    <div class="page">
      <div class="search">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">百搭直筒裤，到手仅149元</span>
      </div>
      <button  class="btn" @click="$router.back()">取消</button>
    </div>
    <div class="search-list">
      <p>热门搜索</p>
      <ul>
        <li >
          <a href="javascript:;">洗衣液</a>
        </li>
        <li >
          <a href="javascript:;">520告白礼物</a>
        </li>
        <li >
          <a href="javascript:;">男装</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Search-page',
//    mounted(){
//      this.$store.dispatch(getSearchWord)
//    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .page
    padding 15px  130px 0 30px
    position relative
    .search
      width 100%
      height 56px
      border-radius 10px
      background-color rgba(0, 0, 0, 0.1)
      text-align center
      line-height 56px
      margin-right 10px
      i
        font-size 30px
      .placeholder
        font-size 32px
        color #666
    .btn
      border none
      outline none
      background-color #fff
      font-size 30px
      position absolute
      top 25px
      right 40px
  .search-list
    clearFix()
    padding 0 30px 30px
    p
      margin 15px 10px
      height 90px
      font-size 28px
      color #999
      line-height 90px
    li
      float left
      height 48px
      line-height 48px
      border 1px solid #999
      margin 0 32px 32px 0
      a
        font-size 24px
        color #333
        padding 0 15px
      &.highlight
        border 1px solid $red
        a
          color $red
</style>
