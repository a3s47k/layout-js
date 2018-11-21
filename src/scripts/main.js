$(window).scroll(function () {
	getCountUP()
});
$(window).resize(function () {
	getCountUP()
});
$(document).ready(function () {
	getCountUP()
});


function getCountUP() {
	$('[data-count]').each(function(){
		var elm = $(this).offset().top,
		docS = $(window).scrollTop(),
		docH = $(window).height(),
		num = $(this).attr('data-count'),
		f = $(this).attr('data-from'),
		run = false

		$(this).text(f)
		if(elm < ((docS + docH) - 100) && !run){
			var $this = $(this),
				countTo = num,
				durationTo = 3000;
			$({ countNum: $this.text() }).animate({
				countNum: countTo
			}, {
					duration: durationTo,
					easing: 'linear',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
						run = true
					}
				});
		} else {
			$(this).text(f)
		}

	})
}
