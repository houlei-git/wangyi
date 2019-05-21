<template>
  <div class="search" @click="$router.push('/search')">
      <i class="iconfont icon-search"></i>
      <span class="placeholder">搜索商品，共xxxxx款好物</span>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Search',
//    methods:{
//      goSearch(path){
//        this.$router.push(path)
//      }
//    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search
    width 100%
    height 56px
    border-radius 10px
    background-color rgba(0, 0, 0, 0.1)
    text-align center
    line-height 56px
    margin-right 10px
    i
      font-size 30px
    .placeholder
      font-size 30px
      color #666
</style>
