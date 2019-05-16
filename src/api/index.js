import ajax from './ajax'

const BASE='/api'

//获取首页数据
export const reqHomeData=()=>ajax('/home')
