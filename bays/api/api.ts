import {request} from '../request/request.js'
import * as TS from './define.ts'
// 获取轮播图
const getSwiperData = () => {
	return request('/home/swiperdata').then((res: TS.SwiperData) => res, err => err)
}
// 获取导航栏
const getNavData = () => {
	return request('/home/catitems').then((res: TS.NavData) => res, err => err)
}
// 楼层
const getFolr=()=>{
	return request('/home/floordata').then((res:TS.Message)=>res,err=>err)
}
//分类接口数据
const getCatelist=()=>{
	return request('/categories').then((res:TS.ListCate)=>res,err=>err)
}
// 搜索商品列表接口
const getSearchList=()=>{
	return request('/goods/search').then((res:TS.Seares)=>res,err=>err)
}
// 商品数据搜索接口
const getSearesList=(id)=>{
	return request(`/goods/qsearch?query=${id}`).then(res=>res,err=>err)
}
// 商品详情数据接口
const getIndexlist=(id)=>{
	return request(`/goods/detail?goods_id=${id}`).then((res=>res,err=>err))
}
export {
	getSwiperData,
	getNavData,
	getFolr,
	getCatelist,
	getSearchList,
	getSearesList,
	getIndexlist
}