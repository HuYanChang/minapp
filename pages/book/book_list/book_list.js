// pages/book/book_list/book_list.js
import baseInfo from '../../../config/api.js'
import utils from '../../../utils/util.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList: [],
    isHidden: false,
    page: 1,
    limit: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBookList();
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

  getBookList(){
      let that = this
      console.log(app.globalData)
      utils.request('Book/bookList', 'GET',{
        page: that.data.page,
        limit: that.data.limit,
        union_id: app.globalData.unionId
      },
      res => {
        // console.log(res)
        let data = res.data
        if(data.list){
          that.setData({
            bookList: data.list,
            isHidden: true
          })
        }
      },
      fail => {
        console.log('获取失败')
      }
      )
  },
  toDetail(e){
    let id = e.currentTarget.dataset.id
    utils.navTo("book/book_detail/book_detail?order_id="+id)
  }
})