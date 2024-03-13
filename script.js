function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
}
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 0,
		dots: true,
		items: 1,
	});
});
// document.getElementById('service__item').onmouseover = function() {
// 	this.style.color = 'white';
//   };