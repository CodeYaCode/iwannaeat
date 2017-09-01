// index.js

/** about restaurant **/
var restaurantClick = function restaurantClick() {
	var me = $(this);
	var id = me.attr('data-id');
	var allSelection = $('.all-selection');
	var todaySelection = $('.today-selection');

	const PREFIX = '<div class="restaurant" data-id="' + id + '">';
	const FIX = '</div>';

	if (!me.hasClass('restaurant-animation')) {
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
}

$('.restaurant').on('click', restaurantClick);

/** about button go **/
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

/** execute when ready **/
$(document).ready(function() {
	$.post('/restaurant/get', function(data) {
		data.forEach(function(value) {
			var id = value.ID;
			var name = value.RESTAURANT_NAME;
			var allSelection = $('.all-selection');

			const PREFIX = '<div class="restaurant" data-id="' + id + '">';
			const FIX = '</div>';
			allSelection.append(PREFIX + name + FIX);
			$('.restaurant').on('click', restaurantClick);
		})
	});
});