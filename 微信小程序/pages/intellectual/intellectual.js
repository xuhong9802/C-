var index ="https://www.xuchaoyang.cn/php/";
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    console.log(options.index)
    wx.showToast({
      title: '加载中...',
      icon: "loading",
      duration: 10000
    });
    wx.request({
      url: index + options.index +".php?id="+options.id,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      
      success:function(res){
        wx.hideToast();
        app.setPageTitle(res.data.data.name)
        that.setData({
          list:res.data.data,
        })
        WxParse.wxParse("content", 'html', res.data.data.content, that, 5)
        console.log(res.data.data)

      }
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
