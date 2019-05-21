<template>
  <div class="moon">
    <span class="iconfont icon-home" @click="goHome"></span>
    <slot></slot>
    <div class="right">
      <span class="iconfont icon-search" @click="goSearch"></span>
      <span class="iconfont icon-cart" @click="goCart"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    data () {
      return {}
    },
    methods:{
      goHome(){
        this.$router.push('/home')
      },
      goSearch(){
        this.$router.push('/search')
      },
      goCart(){
        this.$router.push('/cart')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .moon
    height 100px
    padding 0 12px
    color #7f7f7f
    background-color #FAFAFA
    border-bottom 3px solid #E9E9E9
    line-height 100px
    position relative
    clearFix()
    .iconfont
      font-size 50px
    .right
      float right
</style>
