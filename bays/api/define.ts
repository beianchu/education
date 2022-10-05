interface SwiperData {
	"image_src": string,
	"open_type": string,
	"goods_id": number,
	"navigator_url": string
}

interface NavData {
	
}
// interface Message {
// 	floor_title:{
// 		name:string,
// 		image_src:string
// 	},
// 	product_list:Array<{
// 		name:string,
// 		image_src:string,
// 		image_width:string,
// 		open_type:string,
// 		navigator_url:string
		
// 	}>
// }
//楼层定义接口
type Message=Array<{
	floor_title:{
		name:string,
		image_src:string
		
	},
	product_list:Array<{
		name:string,
		image_src:string,
		image_width:string,
		open_type:string,
		navigator_url:string
		
	}>
}>
//定义分类相应数据类型
type ListCate=Array<{
	cat_id:number,
	cat_name:string,
	cat_pid:number,
	cat_level:number,
	cat_deleted:string,
	cat_icon:string,
	children:Array<listCate>
}>
// 定义公共数据类型
type Meate ={
	"meta": {
	    "msg": string,
	    "status": number
	}
}
tye ItemSeaRes={
{
	"goods_id":number,
	"cat_id": number,
	"goods_name": string,
	"goods_price": number,
	"goods_number": number,
	"goods_weight": number,
	"goods_big_logo": string,
	"goods_small_logo": string,
	"add_time": number,
	"upd_time": number,
	"hot_mumber": number,
	"is_promote": boolean,
	"cat_one_id": number,
	"cat_two_id": number,
	"cat_three_id": number
}
}
// 搜索数据接口定义数据类型！
interface Seares{
	"message": {
	    "total": 10,
	    "pagenum": 1,
	    "goods":Array<ItemSeaRes> 
		meta:Meate
		
}

export {
	SwiperData,
	NavData,
	Message,
	ListCate,
	Seares
}