// pages/common/enrollBaby/enrollBaby.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showImage: {
      url: '',
      height: '',
      width: ''
    },
    imgMaxWidth: '',
    showXuan: true,
    x: 40,
    y: 40,
    scale: 1,
    moveViewWidth: '',
    moveViewHeight: '',
    showHeadImg:false
  },
  /**
   * 选择照片
   */
  selectTap() {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        const tempFilePath = res.tempFilePaths[0]
        console.log(tempFilePath)
        that.data.showImage.url = tempFilePath
        that.setData({ showImage: that.data.showImage })
        that.setData({ showXuan: false })
      }
    })
  },
  onImageLoad: function (e) {
    this.data.showImage.height = e.detail.height;
    this.data.showImage.width = e.detail.width;
    let bili = e.detail.width / e.detail.height - 0.02
    if (bili > this.data.moveViewWidth / this.data.moveViewHeight) {
      wx.showToast({
        title: '请选择正确比例的图片',
      })
      this.setData({ showXuan: true })
      return;
    }

    this.data.showImage.width = this.data.imgMaxWidth;
    this.data.showImage.height = e.detail.height * this.data.imgMaxWidth / e.detail.width

    this.setData({ showImage: this.data.showImage })
    var context = wx.createCanvasContext('canvasOne');
    context.drawImage(this.data.showImage.url, 0, 0, this.data.showImage.width, this.data.showImage.height)
    context.draw()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        this.setData({
          imgMaxWidth: ww * 0.9
        });
        this.setData({ moveViewWidth: ww * 0.9 })
        this.setData({ moveViewHeight: this.data.moveViewWidth * 450 / 345 })
      }
    })
  },
  jieDone: function () {
    var that = this
    wx.canvasToTempFilePath({
      x: that.data.x,
      y: that.data.y,
      width: that.data.moveViewWidth * that.data.scale,
      height: that.data.moveViewHeight * that.data.scale,
      destWidth: that.data.moveViewWidth * that.data.scale,
      destHeight: that.data.moveViewHeight * that.data.scale,
      canvasId: 'canvasOne',
      success: function (res) {
        that.data.showImage.url = res.tempFilePath
        that.data.showImage.height = that.data.moveViewWidth * that.data.scale
        that.data.showImage.width = that.data.moveViewHeight * that.data.scale
        that.setData({ showImage: that.data.showImage })
        that.setData({ showXuan: true })
        that.setData({ showHeadImg: true })
      },
      fail(res) {
        wx.hideLoading()
        wx.showModal({
          title: '截取失败',
          content: res.errMsg
        })
        console.log("fail res:")
        console.log(res)
      }
    })
  },
  cancelImg: function () {
    this.setData({ showXuan: true })
  },
  onChange: function (e) {
    console.log(e.detail)
    this.setData({ x: e.detail.x })
    this.setData({ y: e.detail.y })
  },
  onScale: function (e) {
    this.setData({ scale: e.detail.scale })
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