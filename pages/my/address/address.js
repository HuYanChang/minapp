// pages/my/address/address.js
import utils from '../../../utils/util.js'
import baseInfo from '../../../config/api.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    limit: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.myAddress()
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
  myAddress: function(){
    let that = this
    utils.request("Address/addressList", 'GET',{
      page: that.data.page,
      limit: that.data.limit,
      union_id: app.globalData.unionId
    }, res =>{
      console.log(res)
    }, fail =>{
      console.log('收货地址获取失败')
    })
  }
})