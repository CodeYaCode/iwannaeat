// operation.js

/** html element */
var _op_green_btn = $('.op-green');
var _op_pink_btn  = $('.op-pink');

/** html class */
var rest_animation = 'restaurant-to-be-del';
var cYes = 'op-yes';
var cNo  = 'op-no';
var cAdd = 'op-Add';
var cDel = 'op-Del';

/** html html */
var yes = '√';
var no  = 'x';
var add = '+';
var del = '-';

_op_green_btn.on('click', function() {
	var me = $(this);
	var newName = prompt('New restaurant');
	if (newName) {
		$.post('/restaurant/add/' + newName, function(data) {
			// add element
			var id = data.id;
			var PREFIX = '<div class="restaurant" data-id="' + id + '">';
			var FIX = '</div>';
			$('.all-selection').append(PREFIX + newName + FIX);
			$('.restaurant').on('click', restaurantClick);
		});
	}
});

var restaurantAnimationClick = function restaurantAnimationClick() {
	var me = $(this);
	console.log('animation click');
	if (confirm('Confirm delete【' + me.html() + '】')) {
		var id = me.attr('data-id');
		me.remove();
		$.post('/restaurant/del/' + id, function(data) {
			// delete element
		});
	}
}

_op_pink_btn.on('click', function() {
	var restaurant = $('.restaurant');

	if (restaurant.hasClass(rest_animation)) {
		restaurant.removeClass(rest_animation);
		restaurant.off('click', restaurantAnimationClick);
		// restaurantClick is defined in index.js
		restaurant.on('click', restaurantClick);
	} else {
		restaurant.addClass(rest_animation);
		restaurant.off();
		restaurant.on('click', restaurantAnimationClick);
	}
});