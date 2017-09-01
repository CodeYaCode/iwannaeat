// restaurantService.js
var restaurantDao = require('../dao/restaurantDao')

function restaurantService() {
	this.restaurantDao = new restaurantDao();
	
	// query restaurant info by userId
	this.query = function(userId, cb) {
		this.restaurantDao.query(userId, cb);
	}

	// add restaurant info by userId
	this.add = function(userId, name, cb) {
		this.restaurantDao.add(userId, name, cb);
	}

	// del restaurant info by userId
	this.del = function(userId, id, cb) {
		this.restaurantDao.del(userId, id, cb);
	}
}

module.exports = restaurantService;