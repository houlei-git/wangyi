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
        <div class="phone" @click="goemail">
          <i class="iconfont icon-email"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="register" @click="goster" >
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

    <router-view v-else="isShow">
      <div v-if="Phonelogin" slot="up">
        <div class="code" >
          <input type="text" placeholder="请输入手机号" class="test">
        </div>
        <div class="code" >
          <input type="text" placeholder="请输入短信验证码" class="test">
          <div class="gain">获取验证码</div>
        </div>
        <div class="help" >
          <span>遇到问题?</span>
          <span>使用密码验证登录</span>
        </div>
        <div class="register">
          <span>注册账号</span>
          <i class="iconfont icon-52"></i>
        </div>
      </div>

      <div v-else="Phonelogin" slot="down">
        <div class="code" >
          <input type="text" placeholder="邮箱账号" class="test">
        </div>
        <div class="code" >
          <input type="password" placeholder="密码" class="test">
        </div>
        <div class="help">
          <span>遇到问题?</span>
          <span>使用密码验证登录</span>
        </div>
      </div>
    </router-view>

  </div>
</template>

<script type="text/ecmascript-6">
  import PubSub from 'pubsub-js'
  export default {
    name: 'Personal',
    data(){
      return{
        isShow:true,
        Phonelogin:true
      }
    },
    methods:{
      goLogin(){
        this.$router.push('/personal/login')
        this.isShow=false
      },
      goemail(){
        this.$router.push('/personal/login')
        this.isShow=false
        this.Phonelogin=false
      },
      goster(){
        this.$router.push('/personal/Register')
        this.isShow=false
      }
    },
    mounted(){
      var mySubscriber =  (msg, data)=> {
        this.Phonelogin = data
        this.isShow=data
      }
      var token = PubSub.subscribe('change', mySubscriber)
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
          margin-top 450px
          .iconfont
            font-size 40px
          .login-qq
            width 186px
            height 44px
            text-align center
            border-left 3px solid #7f7f7f
            border-right 3px solid #7f7f7f
    .code
      width 100%
      height 91px
      border-bottom 1px solid #E9E9E9
      margin-bottom 10px
      display flex
      justify-content space-between
      align-items center
      .test
        font-size 30px
        height 50px
      .gain
        width 168px
        height 58px
        text-align center
        line-height 58px
        font-size 30px
        border 1px solid #7f7f7f
        border-radius 13px
    .help
      width 100%
      height 120px
      font-size 30px
      display flex
      justify-content space-between
      align-items center

    .register
      width 100%
      text-align center
      font-size 28px
      position absolute
      top 760px
      left 0
      i
        font-size 28px

</style>
