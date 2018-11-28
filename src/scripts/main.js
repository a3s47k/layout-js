var appSEO = {
	title: 'Tiêu đề trang',
	url: 'https://demo.com/',
	address: 'Địa chỉ',
	map: {
		lg: '10.827831',
		ln: '106.681231',
		code: 'VN'
	},
	buildForm: function(a,b) {
		return '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text">' + a.charAt(0).toUpperCase() + a.slice(1) + '</span></div> <input class="form-control" id="seo-' + a + '" type="text" placeholder="' + b + '"> </div>'
	}
}
for (var key in appSEO) {
	if (appSEO.hasOwnProperty(key)) {
		// Xét ĐK
		if (typeof appSEO[key] === 'string') {
			$('#genform').append(appSEO.buildForm(key,appSEO[key]))
		} else if(typeof appSEO[key] === 'object') {
			for (var k in appSEO[key]) {
				if (appSEO[key].hasOwnProperty(k)) {
					$('#genform').append(appSEO.buildForm(k,appSEO[key][k]))
				}
			}
		}
	}
}
