// pages/tabBar/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  /**
   * 到手机绑定页面
   */
  toBindPhone:function(){
    wx.navigateTo({
      url: '../../mine/phone/phone',
    })
  },
  /**
   * 到关注列表
   */
  toAttention:function(){
    wx.navigateTo({
      url: '../../mine/attention/attention',
    })
  },
  /**
   * 到精彩页
   */
  toJingCai:function(){
    wx.navigateTo({
      url: '../../mine/jingCai/jingCai',
    })
  },
  /**
   * 到助威列表
   */
  toCheerRank:function(){
    wx.navigateTo({
      url: '../../match/profitCheerRank/profitRank',
    })
  },
  /**
   * 到红包页面
   */
  toRedPacket:function(){
    wx.navigateTo({
      url: '../../mine/redPacket/redPacket',
    })
  },
  /**
   * 到助威页面
   */
  toCheer:function(){
    wx.navigateTo({
      url: '../../mine/cheer/cheer',
    })
  },
  /**
   * 到资料修改页面
   */
  toProfile:function(){
    wx.navigateTo({
      url: '../../mine/profile/profile',
    })
  },
  /**
   * 到超级特权页面
   */
  toMyRights: function() {
    wx.navigateTo({
      url: '../../rights/myRights/myRights',
    })
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