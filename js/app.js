$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function() {
		// play hadouken 
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
		// show hadouken and move it to right side of screen
	})
	.mouseup(function() {
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
		//ryu goes back to ready position
	});

})
