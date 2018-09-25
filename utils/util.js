import baseInfo from '../config/api.js'
const app = getApp();
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const request = (url, method, data, successFun, failFun) => {wx.request({
  url: baseInfo.baseInfoUrl + url,
  method: method,
  header: {
    'content-type': method === 'GET' ? 'application/json' : method === 'POST' ? 'application/x-www-form-urlencoded' : '',
  },
  data:data,
  success:res=>{
    return successFun(res)
  },
  fail:res =>{
    return failFun(res)
  }
})}

module.exports = {
  formatTime: formatTime,
  request: request,
  app: app
}
