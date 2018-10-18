// pages/book/book_detail/book_detail.js
import utils from '../../../utils/util.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_id: '',
    bookDetail: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      order_id: options.order_id
    })
    this.getOrderDetail(this.data.order_id)
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
  /**
   * 获取订单详情
   */
  getOrderDetail:function(order_id){
      utils.request('Book/bookDetail', 'GET', {
        order_id: order_id
      },
      res => {
        let data = res.data
        if(data.list){
          this.setData({
            bookDetail: data.list
          })
        }
        //console.log(this.data.bookDetail)
      },
      fail => {
        console.log('数据获取失败')
      }
      )
  }
})