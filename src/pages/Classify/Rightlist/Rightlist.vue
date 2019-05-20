<template>
    <div class="Rightlist">
      <div class="Bscroll">
        <!--右侧头部-->
        <a href="javascript:;" class="R-header">
          <img :src="subCate.bannerUrl" alt="">
        </a>

        <ul class="R-list">
          <li v-for="(item,index) in subCate.subCateList" :key="index">
            <a href="javascript:;">
              <img :src='item.bannerUrl' alt="">
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    name: 'Rightlist',
    props:{
      subCate:Object
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.Rightlist',{
          click: true,
          scrollX:true
        })
      })
    },
    mounted(){
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .Rightlist
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
