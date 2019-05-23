<template>
  <div class="topic">
    <div class="contentTop">
      <Header>
        <div class="title">
          <span>发现</span>
          <span>甄选家</span>
        </div>
      </Header>
      <div class="topicList">
        <ul class="topicul">
          <li v-for="(item,index) in TopicList" :key="index"
              :class="{active: index === itemIndex}" @click="Change(index)"
          >{{item.tabName}}</li>
        </ul>
      </div>
    </div>

    <Orderlist/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import Orderlist from './Order/Orderlist.vue'
  export default {
    name: 'Topic',
    data () {
      return {
        itemIndex:0
      }
    },
    methods:{
      Change(index){
        this.itemIndex=index
      }
    },
    mounted () {
      this.$nextTick(() => {
        new BScroll('.topicList', {
          click: true,
          scrollX: true
        })
      }),
      this.$store.dispatch('gettopicData')
    },
    computed:{
      ...mapState({
        TopicList:state=>state.topic.topicData,
      })
    },
    components:{
      Orderlist
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .topic
    height 100%
    background-color #FAFAFA
    .contentTop
      background-color #fafafa
      position fixed
      top 0
      left 0
      border-bottom 20px solid #F4F4F4
      z-index 99
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
      .topicList
        width 750px
        height 70px
        background-color #fafafa
        .topicul
          width 1000px
          height 70px
          font-size 28px
          line-height 70px
          text-align center
          clearFix()
          li
            float left
            margin 0 20px
            &.active
              border-bottom 4px solid $red
              color $red

</style>
