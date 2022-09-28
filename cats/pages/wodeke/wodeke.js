// pages/wodeke/wodeke.js
import {statusyCord} from "../../utils/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [{
        name: '日',
        date: 25
      },
      {
        name: '一',
        date: 26
      },
      {
        name: "二",
        date: 27,
      },
      {
        name: "三",
        date: 28
      },
      {
        name: '四',
        date: 29
      },
      {
        name: '五',
        date: 30
      },
      {
        name: '六',
        date: '01'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    statusyCord().then(res=>{
      console.log(res,'我的课');
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})