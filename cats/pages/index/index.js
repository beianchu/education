// index.js
// 获取应用实例
const app = getApp()
import {getTopTitle} from "../../utils/index"

Page({
  data: {
    show: false,
    active: 1,
    arrTile:[]
  },

  Change(e) {
    console.log(e);
   
  },
  // 点击1管理联考
  tabShow(){
    this.setData({
      show:true
    })
  },
  // 点击x号关闭弹框
  onClose() {
    this.setData({ show: false });
  },

  
  // 事件处理函数
  bindViewTap() {
    

  },
   onLoad(options) {
    getTopTitle().then(res=>{
      console.log(res);
      this.setData(
        {
          arrTile:res.data
        }
      )
    })
  
  }
  
  
})
