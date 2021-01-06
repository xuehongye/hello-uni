const myRequest = (url, data, method) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method: method || 'GET',
			data: data || {},
			header: {
				'Content-Type': 'application/json',
				'token': uni.getStorageSync('token')
			},
			success: (res) => {
				if (res.statusCode == 200) {
					if (res.data.code === 401) {
						try {
							uni.removeStorageSync('token');
						} catch (e) {
							// Do something when catch error
						}
						// token 为空 回到登录页面强制登录
						uni.navigateTo({
							url: '/pages/login/login'
						})
					} else {
						resolve(res.data);
					}
				} else {
					reject(res.msg);
				}

			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败',
					icon: 'none',
					duration: 1000
				})
				reject(err)
			}
		})
	})
}
export default myRequest
