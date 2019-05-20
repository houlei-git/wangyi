<template>
  <div class="Bsroll">
    <div class="nav-tab">
      <ul class="header-nav-left">
        <li :class="{active:act}" @click="change">推荐</li>
        <li v-for="(item,index) in navList" :key="index"
            :class="{active: index === itemIndex}" @click="handleC(index)">
          {{item.text}}
        </li>
      </ul>
    </div>
    <span class="iconfont icon-54 header-nav-right" @click="showList"></span>

    <div  class="navbox-wrapper" v-if="isShowList">
      <div class="nav-box">
        <div class="all-category">
          <span>全部频道</span>
          <i class="iconfont icon-53" @click="toggleShow"></i>
        </div>
        <ul class="ulNode">
          <li :class="{on: act}" @click="change">推荐</li>
          <li v-for="(item,index) in navList" :key="index"
              :class="{on: index === itemIndex}" @click="handleC(index)">
            {{item.text}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: 'Nav-tab',
    data () {
      return {
        isShowList:false,
        itemIndex:-1,
        act:true,
      }
    },
    methods:{
      toggleShow(){
        this.isShowList=!this.isShowList
      },
      showList(){
        this.isShowList=true
      },
      handleC(index){
        this.itemIndex=index
        this.act=false
      },
      change(){
        this.act=true
        this.itemIndex=-1
      }
    },
    computed:{
      ...mapState({
        navList: state => state.home.navList
      })
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.nav-tab',{
          click: true,
          scrollX:true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .Bsroll
    height 60px
    position relative
    .nav-tab
      width 650px
      height 60px
      display flex
      .header-nav-left
        display flex
        align-items center
        font-size 30px
        height 60px
        line-height 60px
        white-space nowrap
        li
          margin 5px 15px
          padding 0 10px
          text-align center
          color black
          &.active
            border-bottom 4px solid $red
            color $red
    .header-nav-right
      position absolute
      right 0
      bottom 0
      width 105px
      height 60px
      font-size 30px
      text-align center
      line-height 60px
      background-color #fff
    .navbox-wrapper
      .nav-box
        position absolute
        left 0
        top 12px
        width 100%
        z-index 10
        background-color #fff
        .all-category
          display flex
          justify-content space-between
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
              border 2px solid red

</style>
