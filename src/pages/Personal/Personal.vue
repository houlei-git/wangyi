<template>
  <div class="personal">
    <Header>
      <div class="logo"></div>
    </Header>

    <div class="content" v-if="isShow">
      <!--logo图片-->
      <div class="logoworp">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="loading">
      </div>
      <div class="Login">
        <div class="phone" @click="goLogin">
          <i class="iconfont icon-phone"></i>
          <span>手机号码登录</span>
        </div>
        <div class="phone">
          <i class="iconfont icon-email"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="register">
          <span>手机号快捷注册</span>
          <i class="iconfont icon-52"></i>
        </div>
        <div class="wx-qq">
          <div>
            <i class="iconfont icon-weixin"></i>
            <span>微信</span>
          </div>
          <div class="login-qq">
            <i class="iconfont icon-icon"></i>
            <span>QQ</span>
          </div>
          <div>
          <i class="iconfont icon-7"></i>
          <span>微博</span>
        </div>
        </div>
      </div>
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Personal',
    data(){
      return{
        isShow:true
      }
    },
    methods:{
      goLogin(){
        this.$router.push('/personal/login')
        this.isShow=false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personal
    width 100%
    height 100%
    background-color #f2f5f4
    box-sizing border-box
    .logo
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      width 138px
      height 40px
      background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
    .content
      width 100%
      .logoworp
        width 100%
        height 410px
        position relative
        img
          width 268px
          height 90px
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)
      .Login
        width 100%
        height 720px
        padding 0 40px
        box-sizing border-box
        .phone
          width 100%
          height 100px
          margin-bottom 20px
          display flex
          justify-content center
          align-items center
          &:nth-child(1)
            background-color #b4282d
            color #fff
          &:nth-child(2)
            border 1px solid #b4282d
            color #b4282d
          i
            font-size 40px
            margin-right 10px
          span
            font-size 30px
        .register
          width 100%
          height 37px
          font-size 28px
          color #333
          line-height 37px
          text-align center
          i
            font-size 28px


        .wx-qq
          font-size 30px
          color #7f7f7f
          display flex
          justify-content space-around
          margin-top 400px
          .iconfont
            font-size 40px
          .login-qq
            width 186px
            height 44px
            text-align center
            border-left 3px solid #7f7f7f
            border-right 3px solid #7f7f7f
</style>
