import baseInfo from './config/api.js'
import utils from './utils/util.js'
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        utils.request('BaseInfo/getCode2session', 'POST', {
          code:res.code
        },
        res => {
          // console.log(res)
          let data = res.data
          this.globalData.openid = data.list.openid
          this.globalData.en_str = data.list.en_str
          if(data.list.unionId){
            this.globalData.unionId = data.list.unionId
          }
          if(data.list.en_str){
            this.globalData.en_str = data.list.en_str
          }
        },
        fail=>{
          console.log('登录失败')
        }
        )      
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    wx.getLocation({
      success:res => {
        // console.log(res)
      },
    })
  },
  globalData: {
    userInfo: null,
    openid:null,
    sessionKey:null,
    code:null,
    unionId:null,
    en_str:null,
    avatar: null
  }
})