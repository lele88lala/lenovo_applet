// pages/tabBar/mall/mall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBlock: '1'
  },
  toBlock: function (event) {
    let types = event.currentTarget.dataset.type
    if (types == 1) {
      this.setData({ showBlock: 1 })
    } else if (types == 2) {
      this.setData({ showBlock: 2 })
    } else if (types == 3) {
      this.setData({ showBlock: 3 })
    } else if (types == 4) {
      this.setData({ showBlock: 4 })
    }
    console.log(types)
  },
  /**
   * 到商品信息
   */
  toGoods: function () {
    wx.navigateTo({
      url: '../../mall/goods/goods',
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