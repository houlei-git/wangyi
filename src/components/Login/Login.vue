<template>
  <div class="loginPage">
    <div class="logo">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="loading">
    </div>
    <div class="phoneLogin">
      <div class="code">
        <input type="text" placeholder="请输入手机号">
      </div>
      <div class="code">
        <input type="text" placeholder="请输入短信验证码">
        <div class="gain">获取验证码</div>
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
  @import "../../common/stylus/mixins.styl"
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
      background-color yellowgreen
      padding-top 120px
      .code
        width 100%
        height 91px
        border-bottom 1px solid #f5f5f5
        clearFix()
        imput
          outline none
          font-size 32px
          height 50px
          margin 28px 0
        .gain
          float right

</style>
