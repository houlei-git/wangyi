<template>
  <div class="Cart">
    <div class="container">
      <span>购物车</span>
      <a>领券</a>
    </div>
    <div class="sale">
      <div>
        <i class="iconfont icon-circle"></i>
        <span>30天无忧退货</span>
      </div>
      <div>
        <i class="iconfont icon-circle"></i>
        <span>48小时无忧退款</span>
      </div>
      <div>
        <i class="iconfont icon-circle"></i>
        <span>满88免邮费</span>
      </div>
    </div>
    <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="loading">
    <div class="login">
      <span class="add">去说添加点什么吧</span>
      <div class="btn-login">
        <a href="javascript">登录</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Cart',
    data () {
      return {}
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Cart
    background-color #f4f4f4
    width 100%
    height 100%
    position relative
    .container
      width 100%
      height 89px
      line-height 89px
      padding 0 30px
      background-color #fff
      clearFix()
      span
        font-size 36px
        float left
      a
        display block
        float right
        width 90px
        height 89px
        font-size 30px
        color $red
        margin-right 40px


    .sale
      height 70px
      padding 0 30px
      display flex
      justify-content space-between
      align-items center
    img
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
    .login
      width 100%
      height 179px
      position absolute
      top 770px
      display flex
      flex-direction column
      justify-content space-between
      align-items center
      .add
        color #999
        font-size 28px
      .btn-login
        width 478px
        height 92px
        background-color $red
        position relative
        a
          font-size 30px
          color #fff
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)

</style>
