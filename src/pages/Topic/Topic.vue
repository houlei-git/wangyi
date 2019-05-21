<template>
  <div class="topic">
    <div class="header">
      <Header>
        <div class="title">
          <span>发现</span>
          <span>甄选家</span>
        </div>
      </Header>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Topic',
    data () {
      return {}
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .topic
    width 100%
    height 2000px
    background-color #FAFAFA
    .header
      width 100%
      height 220px
      position fixed
      top 0
      left 0
      border-bottom 20px solid #fff
      .title
        position absolute
        height 100px
        top 0
        left 250px
        span
          &:nth-child(1)
            font-size 40px
            color #b4282d
            font-weight bold
            margin-right 20px
          &:nth-child(2)
            font-size 30px
            color #777

</style>
