$('.boxinput input').on('focus', function(){
	$(this).parents('.boxinput').addClass('active')
})
$('.boxinput input').on('blur', function(){
	$(this).val() ? $(this).parents('.boxinput').addClass('active') : $(this).parents('.boxinput').removeClass('active')
})

// function getUrlParameter(param, dummyPath) {
// 	var sPageURL = dummyPath || window.location.search.substring(1),
// 		sURLVariables = sPageURL.replace(/%2C/g, ",").split(/[&||?]/),
// 		res;
// 	for (var i = 0; i < sURLVariables.length; i += 1) {
// 		var paramName = sURLVariables[i],
// 			sParameterName = (paramName || "").split("=");

// 		if (sParameterName[0] === param) {
// 			res = sParameterName[1];
// 		}
// 	}
// 	return res;
// }

// console.log(getUrlParameter("step"))
