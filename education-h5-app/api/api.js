import api from '../common/common/js/request.js'
// 
const bannerimg = async () => {
	let data = await api({
		url: 'article/api/advert/show/1',

	})
	return data
}
const swiper = async () => { //轮播图
	let data = await api({
		url: 'article/api/category/label/list',
		method: 'get',
	})
	return data
}
const list = async (item) => {
	let data = await api({
		url: "course/api/course/search",
		method: 'POST',
		data: item
	})
	return data
}
const readlist = async () => {
	let data = await api({
		url: 'article/api/category/label/list '
	})
	return data
}
const txttabList = async () => { //楼层
	let data = await api({
		url: 'article/api/article/search',
		method: "POST"
	})
	return data
}
// 问答数据结接口
const asklist = async () => {
	let data = await api({
		url: 'question/api/question/hot',
		method: "POST"
	})
	return data
}
// 请求详情页数据
const indexList = async (id) => {
	let data = await api({
		url: `course/api/course/id`
	})
	return data
}
// 详情数据评论的数据
const pinglunlist = async () => {
	let data = await api({
		url: 'course/api/comment/list/null'
	})
	return data
}
// 章节接口
const txttoLisT = async () => {
	let data = await api({
		url: 'course/api/chapter/section/list/null'
	})
	return data
}
// 套餐数据接口
const taocanlsit = async () => {
	let data = await api({
		url: 'course/api/group/list/null'
	})
	return data
}
const redlist4 = async (id) => {
	let data = await api({
		url: `article/api/article/${id}`
	})
	return data
}
// 跳转的数据类型接口
const serchlistsTile = async () => {
	let data = await api({
		url: 'course/api/course/search',
		method: "POST"
	})
	return data
}
// ask问答·详情数据接口
const asklistIndex = async () => {
			let data = await api({
				url: "question/api/question/20"
			})
			return data
			}

			// 我的订单接口
			const order = async () => {
				let data = await api({
					url: "pay/order/user/list"
				})
				return data
			}
			// 我的余额
			const balance = async () => {
				let data = await api({
					url: "pay/user/balance"
				})
				return data
			}
			// 我的学习 course/course/study/list
			const study = async () => {
				let data = await api({
					url: "course/course/study/list"
				})
				return data
			}
			// balance
			// export const floor = async () => { //楼层   这是一种导出方式
			// 	let data = await api({
			// 		url: 'home/floordata'
			// 	})
			// 	return data
			// }
			export {
				//这是另一种导出方式
				taocanlsit,
				swiper,
				list,
				asklist,
				bannerimg,
				readlist,
				txttabList,
				indexList,
				pinglunlist,
				txttoLisT,
				redlist4,
				serchlistsTile,
				asklistIndex,
				order,
				balance,
				study
			}
