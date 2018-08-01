// pages/match/player/player.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showZan:'false',
    showBlock:false,
    showLeve:false,
    focus:false
  },
  leaveWord: function () {
    this.setData({ showLeve: true })
    this.setData({ focus: true })
  },
  /**
   * 画圆
   */
  drawCircle: function (x, y, r, scale, value, desc, can) {
    var dWidth = wx.getSystemInfoSync().windowWidth
    //创建并返回绘图上下文context对象。
    var cxt_arc = wx.createCanvasContext(can);
    cxt_arc.setLineWidth(5);
    if (dWidth <= 320) {
      cxt_arc.scale(0.78, 0.78);
    } else if (dWidth > 360 && dWidth <= 375) {
      cxt_arc.scale(0.92, 0.92);
    } else if (dWidth > 320 && dWidth <= 360) {
      cxt_arc.scale(0.89, 0.89)
    }
    cxt_arc.setStrokeStyle('#f7f7f7');
    cxt_arc.setLineCap('round');
    cxt_arc.fillStyle = "#222";
    cxt_arc.font = "15px Courier New";
    cxt_arc.textAlign = "center";
    cxt_arc.fillText(value, x, y + 5);
    cxt_arc.font = "12px Courier New";
    cxt_arc.fillText(desc, x, y + 60);
    cxt_arc.beginPath();
    cxt_arc.arc(x, y, r, 0, 2 * Math.PI, false);
    cxt_arc.stroke();
    cxt_arc.closePath()
    cxt_arc.beginPath();
    cxt_arc.setStrokeStyle('#6e68f6')
    cxt_arc.arc(x, y, r, 0, scale, false);
    cxt_arc.stroke();
    cxt_arc.draw();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.drawCircle(56, 56, 28, (3 * 2 / 30) * Math.PI, 125, '场均得分', 'canvasCircle0')
    this.drawCircle(130, 56, 28, (12 * 2 / 10) * Math.PI, 3.8, '场均篮板', 'canvasCircle1')
    this.drawCircle(204, 56, 28, (5 * 2 / 10) * Math.PI, 5.2, '场均助攻', 'canvasCircle2')
    this.drawCircle(278, 56, 28, (13 * 2 / 5) * Math.PI, 1.5, '场均抢断', 'canvasCircle3')
    this.drawCircle(352, 56, 28, (3 * 2 / 5) * Math.PI, 0.2, '场均盖帽', 'canvasCircle4')

  },
  /**
   * 点赞
   */
  addZan:function(){
    let that = this
    this.setData({ showZan:true})
    setTimeout(function(){that.setData({showZan:false})},500)
  },
  toBlock:function(event){
    if (event.currentTarget.dataset.type == 1) {
      console.log('true')
      this.setData({ showBlock: true })
    } else {
      console.log('false')
      this.setData({ showBlock: false })
    }
  },
  toFameRank:function(){
    wx.navigateTo({
      url: '../../home/teamRank/teamRank',
    })
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