import {reqTopicData,reqOrderData} from '../../api'

import {RECEIVE_TOPIC,RECEIVE_ORDERDATA}  from '../mutations-types'

//状态数据
const state={
  topicData:[],
  orderData:[]
}
//发送请求
const actions={
  async gettopicData({commit}){
    const result = await reqTopicData()
    if (result.code*1 === 200) {
      commit(RECEIVE_TOPIC, result.data)
    }
  },
  //识物页面 推荐数据
  async getorderData({commit}){
    const result = await reqOrderData()
    if (result.code*1 === 200) {
      commit(RECEIVE_ORDERDATA, result.data)
    }
  }
}
const mutations={
  [RECEIVE_TOPIC] (state, topicData) {
    state.topicData = topicData
  },
  [RECEIVE_ORDERDATA] (state, orderData) {
    state.orderData = orderData
  },
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
