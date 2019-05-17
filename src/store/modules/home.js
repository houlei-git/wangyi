import {reqHomeData} from '../../api'

import {RECEIVE_NAVLIST}  from '../mutations-types'

//状态数据
const state={
  navList:[]
}
//发送请求
const actions={
  async getHomeData({commit}){
    const result = await reqHomeData()
    if (result.code === 0) {
      commit(RECEIVE_NAVLIST, result.data.kingKongModule.kingKongList);
    }
  }
}
const mutations={
  [RECEIVE_NAVLIST] (state, navList) {
    state.navList = navList
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}


