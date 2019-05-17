import ajax from './ajax'

const BASE = process.env.NODE_ENV === 'development' ? '/api' : 'http://localhost:5000';
//获取首页数据
export const reqHomeData=()=>ajax('/home')
