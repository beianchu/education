import  api  from "./api";
// 请求主页的nav
const getTopTitle = async () => { 
	let data = await api({
		url: "app/home/getSecondClassify/1?classify_id=1",
	})
	return data
}
const statusyCord=async ()=>{
  let data=await api({
    url:"app/myCourse/studyCourseList"
  })
  return data
}
// tab兰切换
const getRtabnr=async()=>{
  let data=await api({
    url:"app/news/classify"
  })
  return data

}
// 获取话题榜单
const getlissays=async()=>{
  let data=await api({
    url:"app/square/themeList"
  })
  return data
}
// 获取内容数据
const getConetlsits=async()=>{
  let data =await api({
    url:"app/square/squareList?page=1&limit=15"
  })
  return data
}
//验证码
const getmalist=async()=>{
  let data=await api({
    url:"app/getImgCode"
  })
  return data
}
// 监听数据加载code
const getOnldlist=async()=>{
  let data=await api({
    url:"app/getImgCode"
  })
  return data
}
// 获取验证码
const getListCode=async()=>{
  let data=await api({
    url:"app/getsmscode"
  })
  return data
}
// 页面开始加载数据开始接口
const getindexiop=async()=>{
  let data=await api({
    url:"app/theme/info/1?theme_id=2"
  })
  return data
}
export{
  getTopTitle,
  statusyCord,
  getRtabnr,
  getlissays,
  getConetlsits,
  getmalist,
  getOnldlist,
  getListCode,
  getindexiop
  
}