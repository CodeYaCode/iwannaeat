// restaurantService.js
var restaurantDao = require('../dao/restaurantDao')

function restaurantService() {
	this.restaurantDao = new restaurantDao();
	
	this.query = function(userId, cb) {
		this.restaurantDao.query(userId, cb);
	}
}

module.exports = restaurantService;