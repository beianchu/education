// utils/api.js.js

const api = (params) => {
	let URL = "https://www.lexuemiao.com/api/" //域名
	return new Promise((resolve, reject) => {
		wx.showLoading({
			title: '加载中',
		})
		wx.request({
			url: URL + params.url,
			method: params.method || "GET",
      data: params.data || '',
      mask: true,
			success: res => {
				wx.hideLoading()
				resolve(res.data)
			}

		})
	})
}
export default api

