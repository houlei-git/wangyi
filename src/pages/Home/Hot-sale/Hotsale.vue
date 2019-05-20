<template>
  <div class="hotsale">
    <div class="title">
      类目热销榜
    </div>
    <!--总区域-->
    <div class="content">
      <!--第一行-->
      <div class="line-1">
        <a href="javascript:;">
            <span :class="{on: true}">热销榜</span>
          <img src="https://yanxuan.nosdn.127.net/31dc9401203e8e6f99572abfc4e047a3.png?imageView&quality=65&thumbnail=200x200" alt="">
        </a>
        <a href="javascript:;">
          <span :class="{on: true}">好评榜</span>
          <img src="https://yanxuan.nosdn.127.net/add6e6a6a4ad5a8b7171a02acfa655c2.png?imageView&quality=65&thumbnail=200x200" alt="">
        </a>
      </div>

      <div class="line-2">
        <div class="list">
          <a href="javascript:;">
            <span>居家生活榜</span>
            <img src="https://yanxuan.nosdn.127.net/08f6e74986069813ab7dab4c2491cf96.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>美食酒水榜</span>
            <img src="https://yanxuan.nosdn.127.net/18d906e18667673ce3f3a5fb1d769aac.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>服饰鞋包榜</span>
            <img src="https://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>个护清洁榜</span>
            <img src="https://yanxuan.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>数码家电榜</span>
            <img src="https://yanxuan.nosdn.127.net/cf86ce7b36cc90f5c9b1cbbc5eafd737.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>母婴亲子榜</span>
            <img src="https://yanxuan.nosdn.127.net/de44bd49514fcfe4a915cbd901a94016.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>全球特色榜</span>
            <img src="https://yanxuan.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>运动旅行榜</span>
            <img src="https://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Hotsale',
    data () {
      return {}
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .hotsale
    width 100%
    height 610px
    background-color #fff
    padding-bottom 30px
    box-sizing border-box
    margin-bottom 20px
    .title
      height 100px
      padding 0 30px
      font-size 32px
      color #333
      line-height 100px
    .content
      height 610px
      padding 0 26px 30px 26px
      .line-1
        clearFix()
        a
          float left
          width 339px
          height 200px
          background-color #F9F3E4
          margin 0 10px 10px 0
          position relative
          span
            position absolute
            top 70px
            left 30px
            font-size 28px
            &.on:after
              content ''
              display block
              width 50px
              height 4px
              background-color #333
              margin-top 20px
          img
            float right

      .line-2
        .list
          display flex
          flex-wrap wrap
          a
            display block
            width 165px
            height 180px
            margin 0 9px 10px 0
            background-color #F5F5F5
            text-align center
            padding-top 10px
            box-sizing border-box
            position relative
            img
              width 120px
              height 120px
              margin 35px 10px 10px 10px
            span
              position absolute
              font-size 28px
              top 10px
              left 10%


</style>
