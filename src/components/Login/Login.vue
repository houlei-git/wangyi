<template>
  <div class="loginPage">
    <div class="logo">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="loading">
    </div>

    <div class="phoneLogin">
      <slot name="up"></slot>
      <slot name="down"></slot>

      <div class="other" >
        <span>登录</span>
      </div>
      <div class="other-login">
        <span>其他方式登录</span>
      </div>

    </div>

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
  .loginPage
    width 100%
    height 1201px
    padding 0 40px
    box-sizing border-box
    background-color #fff
    .logo
      width 100%
      height 64px
      img
        width 200px
        height 64px
        margin-top 60px
        position absolute
        left 35%
    .phoneLogin
      width 100%
      height 800px
      /*background-color yellowgreen*/
      padding-top 180px
      position relative
      .other,.other-login
        width 100%
        height 100px
        text-align center
        line-height 100px
        font-size 28px
        margin-bottom 30px
      .other
        background-color #b4282d
        color #fff
      .other-login
        border 1px solid #b4282d
        color #b4282d

</style>
