// index.js

var restaurantClick = function restaurantClick() {
	var me = $(this);
	var allSelection = $('.all-selection');
	var todaySelection = $('.today-selection');

	const PREFIX = '<div class="restaurant">';
	const FIX = '</div>';

	if(me.parent().hasClass('all-selection')) {
		me.remove();
		todaySelection.append(PREFIX + me.html() + FIX);
		$('.restaurant').on('click', restaurantClick);
	} else if(me.parent().hasClass('today-selection')) {
		me.remove();
		allSelection.append(PREFIX + me.html() + FIX);
		$('.restaurant').on('click', restaurantClick);
	}
}

$('.restaurant').on('click', restaurantClick);


var goClick = function goClick() {
	var restaurants = $('.today-selection').children();
	var count = restaurants.length;
	if(count <= 0) {
		return false;
	}
	var index = Math.floor(Math.random()*count);
	$('.result').html(restaurants[index].innerText);
}

$('.go').on('click', goClick);