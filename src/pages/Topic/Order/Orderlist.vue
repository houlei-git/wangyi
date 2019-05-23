<template>

    <div class="orderData" v-if="orderData.length">
      <ul class="OrderList" v-for="(vul,index) in orderData" :key="index">
        <li v-for="(item,index) in vul.topics" :key="index" v-if="item.style===1">
          <div class="dataLi">
            <div class="imgLogo">
              <img :src='item.avatar' alt="loading">
              <span>{{item.nickname}}</span>
            </div>
            <p>{{item.title}}</p>
            <img :src='item.picUrl' alt="loading" class="main-img">
            <span class="people">{{item.readCount}}k人看过</span>
          </div>
        </li>

        <li v-for="(item,index) in vul.topics" :key="index" v-if="item.style===2">
          <div class="dataLi navList">
            <div class="u-left">
              <div class="imgLogo">
                <img :src='item.avatar' alt="loading">
                <span>{{item.nickname}}</span>
              </div>
              <div class="u-title">
                <span>{{item.title}}</span>
                <span>{{item.subTitle}}</span>
                <span>{{item.readCount}}k人看过</span>
              </div>
            </div>
            <div class="u-right">
              <img :src='item.picUrl' alt="loading">
            </div>
          </div>
        </li>
      </ul>
    </div>

</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: 'Orderlist',
    data () {
      return {
      }
    },
    mounted(){
      this.$store.dispatch('getorderData')
    },
    computed:{
      ...mapState({
        orderData:state=>state.topic.orderData
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

    .orderData
      width 100%
      padding-top -200px
      background-color #fff
      padding-top 200px
      .OrderList
        li
          border-bottom 16px solid #eee
          box-sizing border-box
          padding-bottom 30px
          .dataLi
            padding 0 30px
            box-sizing border-box
            clearFix()
            .imgLogo
              height 50px
              padding-top 30px
              position relative
              img
                width 50px
                height 50px
                border-radius 50%
              span
                display block
                color #333
                font-size 30px
                position absolute
                top 40px
                left 70px
            p
              font-size 38px
              margin-top 20px
            .main-img
              width 100%
              height 376px
              margin-top 20px
            .people
              display block
              font-size 24px
              color #999
              margin-top 20px

            .u-left
              margin 32px 0
              width 400px
              height 270px
              float left
              .u-title
                span
                  display block
                  &:nth-child(1)
                    display block
                    font-size 34px
                    margin-top 20px
                  &:nth-child(2)
                    color #999
                    font-size 28px
                    margin-top 10px
                    margin-bottom 40px
                  &:nth-child(3)
                    color #999
                    font-size 24px
            .u-right
              width 272px
              height 272px
              overflow hidden
              margin-top 50px
              float right
              border-radius 10px



</style>
