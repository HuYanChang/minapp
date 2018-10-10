// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userListInfo: [{
      icon: '../../public/my/iconfont-dingdan.png',
      text: '我的订单',
      isunread: true,
      unreadNum: 2,
      toUrl: '/pages/book/book_list/book_list'
    }, {
      icon: '../../public/my/iconfont-card.png',
      text: '我的代金券',
      isunread: false,
      unreadNum: 2,
      toUrl: ''
    }, {
      icon: '../../public/my/iconfont-icontuan.png',
      text: '我的拼团',
      isunread: true,
      unreadNum: 1,
      toUrl: ''
    }, {
      icon: '../../public/my/iconfont-shouhuodizhi.png',
      text: '收货地址管理',
      toUrl:''
    }, {
      icon: '../../public/my/iconfont-kefu.png',
      text: '联系客服',
      toUrl: ''
    }, {
      icon: '../../public/my/iconfont-help.png',
      text: '常见问题',
      toUrl: ''
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    if (app.globalData.userInfo) {
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
  
  }
})