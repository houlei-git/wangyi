<template>
    <div id="footerList">
      <router-link to="/home">
        <div>
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
        </div>
        <span>首页</span>
      </router-link>
      <router-link to="/classify">
        <div>
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
        </div>
        <span>分类</span>
      </router-link>
      <router-link to="/topic">
        <div>
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
        </div>
        <span>识物</span>
      </router-link>
      <router-link to="/cart">
        <div>
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
        </div>
        <span>购物车</span>
      </router-link>
      <router-link to="/personal">
        <div>
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
        </div>
        <span>个人</span>
      </router-link>
    </div>
</template>
<script>
  export default {
//    methods: {
//      goto (path) {
//        this.$router.replace(path);
//      }
//    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #footerList
    width 100%
    height 100px
    background-color #fff
    position fixed
    left 0
    bottom 0
    display flex
    justify-content space-around
    border-top 1px solid #d9d9d9
    a
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      div
        width 40px
        height 40px
        position relative
        overflow hidden
        margin-bottom -23px
        img
          position absolute
          left 0
          top 0
          width 40px
          height 490px
      &:nth-child(1)
        img
          top -250px
      &:nth-child(2)
        img
          top -150px
      &:nth-child(3)
        img
          top -350px
      &:nth-child(4)
        img
          top -50px
      &:nth-child(5)
        img
          top -450px
      &.active
        color #b4282d
        img
          transform translateY(50px)
</style>
