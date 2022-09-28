// index.js
// 获取应用实例
const app = getApp()
import {getTopTitle} from "../../utils/index"

Page({
  data: {
    active: 1,
    arrTile:[]
  },

  Change(e) {
    console.log(e);
   
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
