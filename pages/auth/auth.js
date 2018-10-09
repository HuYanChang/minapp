import baseInfo from '../../config/api.js'
import utils from '../../utils/util.js'
const app = getApp()
// pages/auth/auth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    if (app.globalData.userInfo){
      that.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this
    that.userInfo = app.globalData.userInfo
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 用户信息授权
  wxGetUserInfo(e) {
    // console.log(e)
    utils.request('BaseInfo/getUnionId', 'POST', {
      en_str: app.globalData.en_str,
      encryptedData: e.detail.encryptedData,
      iv: e.detail.iv
    },
      res => {
        console.log(res)
        let data = res.data
      },
      fail => {
        console.log('登录失败')
      }
    )   
  },
  //手机授权
  getPhoneNumber(e){
    console.log(e)
  }
})