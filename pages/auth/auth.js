import baseInfo from '../../config/api.js'
import utils from '../../utils/util.js'
const app = getApp()
// pages/auth/auth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
    console.log(e)
    utils.request('BaseInfo/getUnionId', 'POST', {
      session_key: app.globalData.sessionKey,
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
  }
})