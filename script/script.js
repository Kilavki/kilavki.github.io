<<<<<<< HEAD
$(function() {
	$('.toggles button').click(function() {
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#showall').click(function() {
		$('.post').show(500);
	});
});
=======
$(function() {
	$('.toggles button').click(function() {
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#showall').click(function() {
		$('.post').show(500);
	});
});


$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:8,
		loop: true,
		center: true,
		stagePadding: 10,
	});
});

if($(window).width() < 420) {
	$(".owl-carousel").owlCarousel({
		items:3
	});
}
>>>>>>> da57b23760af9ae8570779c0a8398b116e300906
