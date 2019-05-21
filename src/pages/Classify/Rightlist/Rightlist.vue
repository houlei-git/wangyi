<template>
    <div class="BscrollBox">
      <div class="Bscroll">
        <div v-if="tabList.length">
          <!--右侧头部-->
          <a href="javascript:;" class="R-header">
            <img :src='tabList[num].bannerUrl' alt="">
          </a>

          <ul class="R-list">
            <li v-for="(item,index) in tabList[num].subCateList" :key="index">
              <a href="javascript:;">
                <img :src='item.bannerUrl' alt="">
                <span>{{item.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: 'Rightlist',
    props:{
      num:Number
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.BscrollBox',{
          click: true,
          scrollY:true
        })
      })
    },
    computed:{
      ...mapState({
        tabList:state => state.navlist.tabList
      }),
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .BscrollBox
    width 588px
    height 1148px
    position absolute
    right 0
    top 30px
    .Bscroll
      .R-header
        img
          width 528px
          height 192px
      .R-list
        clearFix()
        li
          float left
          margin-left 10px
          margin-right 30px
          width 144px
          height 206px
          a
            img
              width 144px
              height 144px
          span
            display block
            text-align center
            line-height 34px
            padding 0 5px
            font-size 24px

</style>
