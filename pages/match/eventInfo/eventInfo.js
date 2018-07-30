// pages/home/matchList/matchList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['美国', '中国', '巴西', '日本'],
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    multiIndex: [0, 0, 0],
    showBlock:false,
    showJingCai:false,
    touZhuColor:'',
    coinNum:0,
    coinWords:'立即投注 0竞猜币',
    comTopWords:'本场比赛哪支球队将取得比赛的胜利?'
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
  toBlock:function(event){
    if (event.currentTarget.dataset.type==1){
      console.log('true')
      this.setData({showBlock:true})
    } else {
      console.log('false')
      this.setData({ showBlock: false })
    }
  },
  guess:function(){
    this.setData({showJingCai:true})
  },
  cancelMeng:function(){
    this.setData({showJingCai:false})
  },
  touZhu:function(event){
    let types = event.currentTarget.dataset.type;
    let coinNum = event.currentTarget.dataset.coinNum
    this.setData({ coinWords:'立即投注 '+coinNum+'竞猜币'})
    this.setData({coinNum:coinNum})
    if (types == 1) {
      this.setData({ touZhuColor: 1 })
    } else if(types==2) {
      this.setData({ touZhuColor: 2 })
    } else if (types == 3) {
      this.setData({ touZhuColor: 3 })
    } else if (types == 4) {
      this.setData({ touZhuColor: 4 })
    }
  }
})