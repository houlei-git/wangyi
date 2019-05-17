<template>
  <div>
    <div class="wraper">
      <div class="line">
        <span class="logo">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
        </span>
        <div class="search">
          <i class="iconfont icon-search"></i>
          <span class="placeholder">搜索商品，共xxxxx款好物</span>
        </div>
        <div class="btn">登录</div>
      </div>
      <div class="nav-tab">
        <ul class="header-nav-left">
          <li>
            <a href="javascript:;">推荐</a>
          </li>
          <li>
            <a href="javascript:;">居家生活</a>
          </li>
          <li>
            <a href="javascript:;">服饰箱包</a>
          </li>
          <li>
            <a href="javascript:;">美食酒水</a>
          </li>
        </ul>
        <span class="iconfont icon-54 header-nav-right" @click="showList"></span>
      </div>
      <div  class="navbox-wrapper" v-if="isShowList">
        <div class="nav-box">
          <div class="all-category">
            <span>全部频道</span>
            <i class="iconfont icon-53" @click="toggleShow"></i>
          </div>
          <ul class="ulNode">
            <li>
              <a href="javascript:;">推荐</a>
            </li>
            <li>
              <a href="javascript:;">居家生活</a>
            </li>
            <li>
              <a href="javascript:;">服饰鞋包</a>
            </li>
            <li>
              <a href="javascript:;">美食酒水</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="home-main">
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
      <Navlist/>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import Swiper from './Swiper/Swiper.vue'
  import Navlist from './Navlist/Navlist.vue';
  export default {
    name: 'Home',
    data () {
      return {
        isShowList:false
      }
    },
    methods:{
      toggleShow(){
        this.isShowList=!this.isShowList
      },
      showList(){
        this.isShowList=true
      }
    },
    mounted () {
      this.$nextTick(() => {
        const height = document.documentElement.clientHeight;
        const recoFindMain = document.querySelector('.home-main');
        recoFindMain.style.height = height + 'px';
        this.$refs.swiper._initSwiper();
//        this.$store.dispatch('getHomeData');
        /* eslint-disable no-new */
        if (!this.classScroll) {
          this.classScroll = new BScroll('.home-main', {
            click: true
          })
        }
      });
    },
    components:{
      Swiper,
      Navlist
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*@import "../../common/stylus/mixins.styl"*/
  .wraper
    width 100%
    height 148px
    /*background-color gainsboro*/
    position relative
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
      .search
        width 100%
        height 56px
        border-radius 10px
        background-color rgba(0,0,0,0.1)
        text-align center
        line-height 56px
        margin-right 10px
        i
          font-size 30px
        .placeholder
          font-size 30px
          color #666
      .btn
        border 1px solid #b4282d
        font-size 24px
        border-radius 10px
        color #b4282d
        width 90px
        height 40px
        line-height 40px
        text-align center

    .nav-tab
      width 100%
      height 60px
      position absolute
      left 0
      bottom 0
      .header-nav-left
        width 100%
        font-size 30px
        height 60px
        li
          float left
          height 50px
          margin 5px 20px
          padding 0 10px
          text-align center
          line-height 50px
          a
            color black
          &.active
            border-bottom 4px solid #b4282d
            a
              color #b4282d
      .header-nav-right
        position absolute
        right 0
        top 0
        width 100px
        height 60px
        font-size 30px
        text-align center
        line-height 60px
    .navbox-wrapper
      .nav-box
        position absolute
        left 0
        top 90px
        width 100%
        z-index 10
        background-color #fff
        .all-category
          display flex
          justify-content space-between
          /*position relative*/
          font-size 30px
          height 60px
          line-height 60px
          margin 0 0 20px
          text-align center
          span
            margin-left 30px
          i
            width 100px
            height 60px
            font-size 30px
        .ulNode
          clearFix()
          width 100%
          height 288px
          background-color #fff
          font-size 24px
          text-align center
          box-sizing border-box
          li
            float left
            width 150px
            height 56px
            text-align center
            line-height 56px
            border-radius 5px
            margin 0 0 40px 30px
            background-color #FAFAFA
            box-sizing border-box
            &.on
              border 1px solid red

  .home-main
    height 1000px
    .sale
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
