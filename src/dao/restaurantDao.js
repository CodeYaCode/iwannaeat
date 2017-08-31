// restaurantDao.js
var query = require('../db/connector.js')
var sql = require('../db/sql.js')['RESTAURANT']

function restaurantDao() {
	this.queryRestaurant = function(userId) {
		query(sql['query'], userId, function(err, result, fields) {
			console.log(sql['query']);
			console.log('result: ' , err);
		});
	}
}

restaurantDao = new restaurantDao();
var userId = 1;
restaurantDao.queryRestaurant(userId);

module.exports = restaurantDao;