// pages/tabBar/auth/auth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  getFirstInfo: function () {
    // var that = this
    // wx.getUserInfo({
    //   withCredentials: true,
    //   success: res => {
    //     that.setData({ showAuth: false });
    //     // 可以将 res 发送给后台解码出 unionId
    //     app.globalData.userInfo = res.userInfo;
    //     if (app.globalData.unionId == null) {
    //       var data = {
    //         account: 'wolvesapplet', openId
    //           : app.globalData.openId, encryptedData
    //           : res.encryptedData, iv: res.iv
    //       }
    //       util.request(userInfo, function (res) {
    //         app.globalData.unionId = res.data.unionId;
    //         that.setData({ showAuth: false });
    //       }, 'GET', '', data);
    //     }
    //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //     // 所以此处加入 callback 以防止这种情况
    //     if (that.userInfoReadyCallback) {
    //       that.userInfoReadyCallback(res)
    //     }
    //   },
    //   fail: function (res) {
    //     wx.showModal({
    //       title: '提示',
    //       content: '您必须对小程序进行授权才能使用篮球服务',
    //       showCancel: false
    //     })
    //   }
    // })
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
  
  }
})