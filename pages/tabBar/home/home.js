// pages/tabBar/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },
  /**
   * 到超级特权页面
   */
  toMyRights: function () {
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
  
  },
  /**
   * 跳转到全部比赛页
   */
  toMoreMatch:function(){
    wx.switchTab({
      url: '../match/match'
    })
  },
  /**
   * 跳到闯关页面
   */
  toLevel:function(){
    wx.navigateTo({
      url: '../../home/level/level',
    })
  },
  /**
   * 到比赛详情页
   */
  toEventDetail:function(){
    wx.navigateTo({
      url: '../../match/eventInfo/eventInfo',
    })
  },
  /**
   * 到球队人气排行
   */
  toTeamRank:function(){
    wx.navigateTo({
      url: '../../home/teamRank/teamRank',
    })
  },
  /**
   * 到助威积分页面
   */
  toCheerRank:function(){
    wx.navigateTo({
      url: '../../match/profitCheerRank/profitRank',
    })
  },
  /**
   * 到签到页面
   */
  toSign: function () {
    wx.navigateTo({
      url: '../../common/sign/sign',
    })
  },
  /**
   * 到参赛报名页面
   */
  toEnroll: function () {
    wx.navigateTo({
      url: '../../common/enrollOne/enroll',
    })
  }
})