// restaurantDao.js
var query = require('../db/connector.js')
var sql = require('../db/sql.js')['RESTAURANT']

function restaurantDao() {
	this.query = function(userId, callback) {
		query(sql['query'], userId, callback);
	}
}

// dao = new restaurantDao();
// var result = dao.query(1);
// console.log(result);

module.exports = restaurantDao;