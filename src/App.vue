<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
//  async mounted(){
//    // 触发vuex的action调用: 请求后台接口获取address到state中
//    this.$store.dispatch('getAddress')
//  },
  components: {
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
