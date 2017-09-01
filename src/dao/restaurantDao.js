// restaurantDao.js
var query = require('../db/connector')
var sql = require('../db/sql')['RESTAURANT']

function restaurantDao() {
	// query restaurant by userId
	this.query = function(userId, cb) {
		query(sql['query'], userId, cb);
	}
	// add restaurant
	this.add = function(userId, name, cb) {
		query(sql['add'], [userId, name], cb);
	}
	// del restaurant
	this.del = function(userId, id, cb) {
		query(sql['del'], [userId, id], cb);
	}
}

// restaurantDao = new restaurantDao();
// var userId = 1;
// var id = 2;
// restaurantDao.add(userId, id, function(err, rows, field) {
// 	console.log(rows);
// });

module.exports = restaurantDao;