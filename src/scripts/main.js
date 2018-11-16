function devTool() {
	var butDev = '<div class="togglegird"><button class="btn btn-primary" id="control" type="button">Bật/Tắt</button></div>'
	var girdDev = '<div class="luoi"> <div class="container"> <div class="row"> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> </div> </div> </div>'
	var cssDev = '.togglegird { position: fixed; right: 1rem; bottom: 1rem; z-index: 9000; } .luoi { position: fixed; top: 0; left: 0; z-index: 8000; width: 100%; height: 100vh; display: none; } .luoi.active { display: flex; } .luoi .row { height: 100vh; } .luoi .item { width: auto; flex-basis: 0; flex-grow: 1; max-width: 100%; padding-top: 0; padding-right: 15px; padding-bottom: 0; padding-left: 15px; } .luoi .item .bg { background: #42f2ff91; height: 100vh; }'

	$('head').append('<style type="text/css">' + cssDev + '</style>');
	$('body').append(butDev).append(girdDev)
	$('.togglegird button').on('click', function () {
		$('.luoi').toggleClass('active')
	})
}

devTool()
