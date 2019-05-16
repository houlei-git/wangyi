<template>
  <div id="Footer" >
    <router-link :to="">
      <span class="item">
      <i></i>
      <span>首页</span>
    </span>
    </router-link>
    <span class="item">
      <i></i>
      <span>分类</span>
    </span>
    <span class="item">
      <i></i>
      <span>识物</span>
    </span>
    <span class="item">
      <i></i>
      <span>购物车</span>
    </span>
    <span class="item">
      <i></i>
      <span>个人</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    data () {
      return {}
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #Footer
    width 100%
    height 100px
    border-top 1px solid #d9d9d9
    font-size 25px
    position fixed
    left 0
    bottom 0
    display flex
    justify-content space-around
    align-items  center
    .item
      color #666
      text-align center
      i
        display block
        width 40px
        height 40px
        vertical-align middle
        margin 0 auto
        background-image url("./images/wangyi.png")
        background-repeat no-repeat
      &:nth-child(1) i
        background-position 0 -200px
      &:nth-child(2) i
        background-position 0 -150px
      &:nth-child(3) i
        background-position 0 -350px
      &:nth-child(4) i
        background-position 0 -50px
      &:nth-child(5) i
        background-position 0 -450px
</style>
