$(document).ready(function () {
	$('.shop [data-toggle="modal"]').each(function () {
		$(this).click(function () {


			var getcnt = $(this).parents('.cnt')

			$('#quickView .modal-title h2').html(getcnt.find('h2').html())
			$('#quickView .modal-body .col-7').html(getcnt.find('p').html())
			$('#quickView .modal-body .col-5').html(getcnt.find('.hehe').html())

			$('#quickView').on('show.bs.modal', function (e) {
				$('#quickView .owl-carousel').owlCarousel({
					loop: true,
					nav: true,
					item: 1
				})
			})
			setTimeout(() => {
				$('#quickView .d-none').removeClass('d-none')
			}, 700);





		})
	})
});
