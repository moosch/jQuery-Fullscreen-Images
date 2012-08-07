$(document).keydown(function(e){
	if (e.keyCode == 37) { 
		var code = 'left';
		cycle(code);
		return false;
	}
	if (e.keyCode == 39) { 
		var code = 'right';
		cycle(code);
		return false;
	}
});

function cycle(obj){
	var container = $('#full_image');
	var currentAttr = container.children().attr('src');
	var liContainer = $('ul#images');
	var currentLi = liContainer.find('[src$="'+currentAttr+'"]').parent();
	
	if ( obj == 'left' ){
		// $('ul#images').find(currentImg).parent().is('li:first-child');
		if ( currentLi.is(":first-child") ){
			var previous = $('ul#images li:last-child img');
		} else {
			var previous = currentLi.prev().children();
		}
		container.empty();
		previous.clone().appendTo(container);
	}

	if ( obj == 'right' ){
		if ( currentLi.is(":last-child") ){
			var next = $('ul#images li:first-child img');
		} else {
			var next = currentLi.next().children();
		}
		container.empty();
		next.clone().appendTo(container);
	}
}

function fullScreenFunc(){
	var fullScreenObj = document.getElementById('full_image');
	if (fullScreenObj.requestFullscreen) {
		fullScreenObj.requestFullscreen();
	}
	else if (fullScreenObj.mozRequestFullScreen) {
		fullScreenObj.mozRequestFullScreen();
	}
	else if (fullScreenObj.webkitRequestFullScreen) {
		fullScreenObj.webkitRequestFullScreen();
	}
}