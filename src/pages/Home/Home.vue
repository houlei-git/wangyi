<template>
  <div>
    <div class="wraper">
      <div class="line">
        <span class="logo">
          <img
            src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
            alt="">
        </span>
        <!--搜索框-->
        <Search/>
        <div class="btn">登录</div>
      </div>
      <!--tab 栏-->
      <Navtab/>
    </div>

    <div class="homeScroll">
      <div class="home-content">
        <!--轮播图-->
        <Swiper ref="swiper"/>

        <ul class="sale">
          <li>
            <i class="wy"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="wy"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="wy"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
        <!--导航列表-->
        <Navlist/>
        <!--礼品区域-->
        <Gift/>
        <!--制造商-->
        <Facturer/>
        <!--热销类-->
        <Hotsale/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Swiper from './Swiper/Swiper.vue'
  import Navlist from './Navlist/Navlist.vue'
  import Navtab from './Nav-tab/Nav-tab.vue'
  import Gift from './gift/Gift.vue'
  import Facturer from './Facturer/Facturer.vue'
  import Hotsale from './Hot-sale/Hotsale.vue'
  export default {
    name: 'Home',
    data () {
      return {}
    },

    mounted () {
      this.$nextTick(() => {
        new BScroll('.homeScroll', {
          click: true,
          scrollY: true
        })
      })
    },
    components: {
      Swiper,
      Navlist,
      Navtab,
      Gift,
      Facturer,
      Hotsale
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wraper
    width 100%
    height 150px
    background-color #fff
    position fixed
    top 0
    left 0
    z-index 99
    .line
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 88px
      font-size 30px
      padding 25px
      box-sizing border-box
      .logo
        flex 2
        height 40px
        margin 10px
      .btn
        border 1px solid #b4282d
        font-size 24px
        border-radius 10px
        color #b4282d
        width 90px
        height 40px
        line-height 40px
        text-align center
  .homeScroll
    width 750px
    height 1234px
    .home-content
      padding-top 148px

      background-color #F4F4F4
      .sale
        background-color #fff
        width 100%
        height 72px
        display flex
        justify-content space-around
        align-items center
        li
          display flex
          .wy
            width 32px
            height 32px
            background-size 32px 32px
            background-repeat no-repeat
            background-position center
            margin -5px 10px 0 0
          &:nth-child(1)
            i
              background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
          &:nth-child(2)
            i
              background-image url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png")
          &:nth-child(3)
            i
              background-image url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png")
</style>
