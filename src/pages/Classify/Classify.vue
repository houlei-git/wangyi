<template>
  <div class="contater">
    <div class="title">
      <!--搜索框-->
      <Search/>
    </div>
    <!--内容区-->
    <div class="content">
      <!--左侧列表-->
      <div class="nav-list">
        <ul>
          <li v-for="(item, index) in tabList" :key="item.id"
              @click="handleC(item)"
          >{{item.name}}</li>
        </ul>
      </div>
      <!--右侧列表-->
      <router-view :subCate="subCate"></router-view>
      <!--<Rightlist :subCateList="subCateList"/>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Rightlist from './Rightlist/Rightlist.vue'
  export default {
    name: 'Classify',
    data () {
      return {
        subCate:{}
      }
    },
    mounted(){
      this.$store.dispatch('getTabList')
    },
    computed:{
      ...mapState({
        tabList:state => state.navlist.tabList
      }),
    },
    methods:{
      handleC(item){
        this.$router.push(`/classify/region/${item.id}`)
        this.subCate=item
      }
    },
    components:{
      Rightlist
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .title
    padding 15px 30px
  .content
    height 1334px
    border-top 3px solid #f5f5f5
    overflow hidden
    position relative
    .nav-list
      float left
      width 162px
      height 1120px
      padding 40px 0
      display flex
      flex-direction column
      li
        width 162px
        height 50px
        font-size 28px
        text-align center
        line-height 50px
        margin-bottom 30px

</style>
