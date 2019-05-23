<template>
  <div class="celerity ">
    <div class="title">
      <span>手机号注册</span>
    </div>

    <div class="phone-regis">
      <div class="code" >
        <input type="text" placeholder="请输入手机号" class="test">
      </div>
      <div class="code" >
        <input type="text" placeholder="请输入短信验证码" class="test">
        <div class="gain">获取验证码</div>
      </div>
      <div class="code" >
        <input type="text" placeholder="请输入密码" class="test">
      </div>
      <div class="code" >
        <input type="text" placeholder="请确认密码" class="test">
      </div>
      <div class="enroll " >
        <span>注册</span>
      </div>
      <div class="agreement">
        <input type="checkbox">
        <span>我同意 <a href="javascript:;" class="treaty">《网易服务条款》</a>
          和 <a href="javascript:;" class="treaty">《网易隐私政策》</a>
        </span>
      </div>
      <div class="goemail" @click="Goemail">
        <span>邮箱账号注册</span>
        <i class="iconfont icon-52"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import PubSub from 'pubsub-js'
  export default {
    name: 'Register',
    data(){
      return{
        goto:false
      }
    },
    methods:{
      Goemail(){
        this.$router.push('/personal/login')
        PubSub.publish('change',this.goto)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .celerity
    width 100%
    height 100%
    background-color #fff
    margin-top -130px
    .title
      width 100%
      height 100px
      font-size 36px
      display flex
      justify-content center
      align-items center
    .phone-regis
      margin-top 100px
      padding 0 40px
      box-sizing border-box
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

      .enroll
        width 100%
        height 100px
        text-align center
        line-height 100px
        font-size 28px
        background-color #b4282d
        color #fff
      .agreement
        width 100%
        height 50px
        margin-top 30px
        line-height 50px
        position relative
        padding-left 37px
        input
          width 30px
          height 30px
          position absolute
          top 10px
          left 0
        .treaty
          color #007aff
      .goemail
        height 40px
        margin-top 30px
        font-size 28px
        line-height 40px
        text-align center
        i
          font-size 28px
</style>
