import ajax from './ajax'

const BASE = process.env.NODE_ENV === 'development' ? '/api' : 'http://localhost:5000';
//获取首页数据
export const reqHomeData=()=>ajax('/home')
//获取搜索页面的关键字
export const reqSearchWord = () => ajax(`${BASE}/xhr/search/init.json`, 'POST')
//获取分类页面列表
export const reqTabList =() =>ajax('/categorylist')
