<template>
  <div class="gift">
    <div class="g-header">
      <span>— 新人专享礼 —</span>
    </div>

    <a href="javascript:;" class="g-left">
      <div class="left-text">新人专礼包</div>
      <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="新人专享礼包">
    </a>
    <div class="g-right">
      <a href="javascript:;" class="mar">
        <div>
          <p class="welfare">福利社</p>
          <div class="today">今日特价</div>
        </div>
        <img src="http://yanxuan.nosdn.127.net/aa2bbfa0e4f63160b454c67c911c9290.png" alt="福利社">
      </a>
      <a href="javascript:;" class="mar">
        <p class="welfare">新人拼团</p>
        <div class="tag">一元起包邮</div>
        <img src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png" alt="新人拼团">
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Gift',
    data () {
      return {}
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .gift
    background-color #fff
    width 100%
    height 560px
    padding-left 30px
    margin-bottom 20px
    .g-header
      width 80%
      height 90px
      margin 0 auto
      font-size 32px
      text-align center
      line-height 90px
    .g-left
      position relative
      width 343px
      height 434px
      font-size 24px
      float left
      clearFix()
      background-color rgb(249, 233, 207)
      margin-right 4px
      img
        position: absolute;
        top 50%
        left 50%
        transform translate(-50%,-50%)
      .left-text
        font-size 32px
        color black
        padding 30px 0 0 30px
    .g-right
      width 343px
      height 437px
      display flex
      flex-flow column
      a
        width 343px
        height 215px
        background-color rgb(249, 233, 207)
        position relative
        &:nth-child(1)
          margin-bottom 4px
        img
          width 200px
          height 200px
          position absolute
          right 0
          bottom 0
      .mar
        .welfare
          font-size 32px
          color black
          padding 30px 0 0 30px
          margin-bottom 10px
        .today
          color #7F7F7F
          font-size 24px
          margin-left 30px
        .tag
          width 120px
          height 32px
          line-height 32px
          font-size 22px
          color #fff
          margin-left 30px
          background #CBB693
          text-align center
          border-radius 7px
</style>
