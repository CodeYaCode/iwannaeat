// restaurantDao.js
var query = require('../db/connector')
var sql = require('../db/sql')['RESTAURANT']

function restaurantDao() {
	this.query = function(userId, cb) {
		query(sql['query'], userId, cb);
	}
}

// restaurantDao = new restaurantDao();
// var userId = 1;
// restaurantDao.queryRestaurant(userId);

module.exports = restaurantDao;