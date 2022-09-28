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
export{
  getTopTitle,
  statusyCord
}