// 封装axios + Promise
// 1). 统一处理请求异常
// 2). 异常获取的不是response, 而是response.data

import axios from 'axios'

export default function ajax(url,data={},method='GET') {
  return new Promise((resolve,reject)=>{
    let promise
    if (method==='GET'){
      promise=axios.get(url,{
        params:data
      })
    }else {
      promise=axios.post(url,data)
    }
    // 请求成功, 调用resolve(response.data)
    promise.then(response=>{
      resolve(response.data)
    }).catch(error=>{   //请求出错
      alert('请求出错'+error.message)
    })
  })
}
