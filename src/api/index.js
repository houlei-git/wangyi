import ajax from './ajax'

const BASE = process.env.NODE_ENV === 'development' ? '/api' : 'http://m.you.163.com'
//获取首页数据
export const reqHomeData=()=>ajax('/home')
//获取搜索页面的关键字
export const reqSearchWord = () => ajax(`${BASE}/xhr/search/init.json`, 'POST')
//获取分类页面列表
export const reqTabList =() =>ajax('/categorylist')
//获取识物页面tab推荐数据
export const reqTopicData = () => ajax(`${BASE}/topic/v1/find/getTabs.json`)
//识物 推荐数据
export const reqOrderData = (id) => ajax(`${BASE}/topic/v1/find/recManual.json`, {id})

