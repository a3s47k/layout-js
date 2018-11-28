var appSEO = {
	title: 'Tiêu đề trang',
	url: 'https://demo.com/',
	address: 'Địa chỉ',
	map: {
		lg: '10.827831',
		ln: '106.681231',
		code: 'VN'
	}
}
for (var key in appSEO) {
	if (appSEO.hasOwnProperty(key)) {
		let inputTmp = '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text">' + key.charAt(0).toUpperCase() + key.slice(1) + '</span></div> <input class="form-control" id="seo-' + key + '" type="text" placeholder="' + appSEO[key] + '"> </div>'
		// Xét ĐK
		if (typeof appSEO[key] !== 'object') {
			$('#genform').append(inputTmp)
		}

	}
}
