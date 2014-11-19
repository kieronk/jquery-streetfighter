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
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
			{"left": "300px"},
			500, 
			function() {
				$(this).hide();
				$(this).css("left", "-212px");
			});
	})
	.mouseup(function() {
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
		//ryu goes back to ready position
	});
	$(document).keydown(function( event ){
		console.log("keypress");
		if ( event.which == 88 ) {
		$(".ryu-ready").hide();
		$(".ryu-throwing").hide();
		$(".ryu-still").hide();
		$(".ryu-cool").show();
	}	
	else {
		console.log("you pressed something else");
		}	
	});
	$(document).keyup(function( event ){
		if ( event.which == 88 ) {
			$(".ryu-cool").hide();
			$(".ryu-ready").show();
		}
		else {
		console.log("you pressed something else");
		}
	});
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
