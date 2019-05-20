import {reqTabList} from '../../api'

import {RECEIVE_TABLIST}  from '../mutations-types'

//状态数据
const state={
  tabList:[]
}
//发送请求
const actions={
  async getTabList({commit}){
    const result = await reqTabList()
    console.log(result)
    if (result.code === 0) {
      commit(RECEIVE_TABLIST, result.data.categoryL1List)
    }
  }
}
const mutations={
  [RECEIVE_TABLIST] (state, tabList) {
    state.tabList = tabList
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
