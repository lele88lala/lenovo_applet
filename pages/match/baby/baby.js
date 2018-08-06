// pages/match/baby/baby.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBlock: '3',
    showLeve: false,
    focus: false,
    showGift:false,
    nowSelectGift:'1',
    giftCount:1,
    images:[
      {
        pic:'../../../images/btn_checkpoint_pre.png',
        height:0
      }, {
        pic: '../../../images/img_bg_sign_up.png',
        height: 0
      }, {
        pic: '../../../images/img_coupon.png',
        height: 0
      }, {
        pic: '../../../images/btn_checkpoint_pre.png',
        height: 0
      }, {
        pic: '../../../images/icon_red_envelopes.png',
        height: 0
      }
    ],
    imagesWL:[],
    imagesWR: [],
    imagesL:[],
    imagesR:[],
    imgWidth:''
  },
  /**
   * 图片加载
   */
  onImageLoad: function (e) {
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.45;

        this.setData({
          imgWidth: imgWidth
        });
      }
    })
    let imgW = e.detail.width;
    let imgH = e.detail.height;
    let id = e.currentTarget.id
    this.data.images[id].height = this.data.imgWidth*imgH/imgW
    var imageOne = {}
    imageOne.pic = this.data.images[id].pic
    imageOne.height = this.data.images[id].height
    if(id%2===1){
      this.data.imagesWL.push(imageOne)
    } else {
      this.data.imagesWR.push(imageOne)
    }
    this.setData({ imagesL:this.data.imagesWL})
    this.setData({ imagesR: this.data.imagesWR })
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
  },
  toFameRank: function () {
    wx.navigateTo({
      url: '../../home/teamRank/teamRank',
    })
  },
  leaveWord: function () {
    this.setData({ showLeve: true })
    this.setData({ focus: true })
  },
  giveGift: function () {
    this.setData({ showGift:!this.data.showGift})
  },
  clickGift: function (e) {
    let id = e.currentTarget.dataset.num
    this.setData({nowSelectGift:id})
    console.log(this.data.nowSelectGift)
  },
  giftCountChange: function (e) {
    let types = e.currentTarget.dataset.types
    if(types==1) { 
      this.setData({ giftCount: this.data.giftCount > 1 ? this.data.giftCount-1:1})
    } else if(types==2){
      this.setData({ giftCount: this.data.giftCount+1})
    }
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