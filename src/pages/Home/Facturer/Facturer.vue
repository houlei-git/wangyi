<template>
  <div class="fact">
    <div class="title">
      <span>品牌制造提供商</span>
      <a href="javascript:;" class="right">
        <span>更多</span>
        <i class="iconfont icon-52"></i>
      </a>
    </div>
    <ul class="list">
      <li>
        <a href="javascript:;">
          <span>海外制造商</span>
          <span>9.9元起</span>
          <span v-show="isShow">上新</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <span>CK制造商</span>
          <span>32.9元起</span>
          <span v-show="!isShow">上新</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <span>Nine West 制造商</span>
          <span>219元起</span>
          <span v-show="!isShow">上新</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <span>新秀丽制造商</span>
          <span>34.9元起</span>
          <span v-show="!isShow">上新</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Facturer',
    data () {
      return {
        isShow:true
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .fact
    width 100%
    height 683px
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
      clearFix()
      .right
        font-size 30px
        float right
        i
          width 30px
          height 30px
          font-size 30px
    .list
      height 555px
      padding 0 26px 30px 26px
      clearFix()
      li
        float left
        background-repeat no-repeat
        background-size 100% 100%
        width 343px
        height 260px
        &:nth-of-type(1)
          margin 0 7px 5px 0
          background-image url("http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png")
        &:nth-of-type(2)
          margin-bottom 5px
          background-image url("http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png")
        &:nth-of-type(3)
          margin 0 5px 0 0
          background-image url("http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png")
        &:nth-of-type(4)
          /*margin-bottom 5px*/
          background-image url("http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png")
        a
          display block
          width 343px
          height 260px
          span
            font-size 28px
            float left
            &:nth-of-type(1)
              width 100%
              text-align center
              margin-top 20px
            &:nth-of-type(2)
              font-size 24px
              color #777
              margin-top 10px
              margin-left 35%
            &:nth-of-type(3)
              font-size 24px
              width 64px
              height 33px
              color #fff
              text-align center
              line-height 33px
              border-radius 5px
              background-color #CBB693
              margin-left 10px
              margin-top 10px
</style>
