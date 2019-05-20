<template>
  <section class="nav-container">
    <ul class="nav-box">
      <li class="nav-item" v-for="(nav, index) in navList" :key="index">
        <img v-lazy="nav.picUrl" >
        <span>{{nav.text}}</span>
      </li>
    </ul>
  </section>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        isShow:false
      }
    },
    computed: {
      ...mapState({
        navList: state => state.home.navList
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .nav-container
    background-color #fff
    padding-bottom 30px
    margin-bottom 20px
    .nav-box
      clearFix()
      text-align center
      .nav-item
        float left
        width 110px
        height 156px
        margin 10px 20px 9px
        position relative
        .loading
          width 100%
          height 100%
          position absolute
          left 0
          top 0
        img
          width 110px
          height 110px
          margin-bottom 10px
        span
          font-size 24px
          width 110px
          height 36px
          margin-top 10px

</style>
