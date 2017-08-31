// userDao.js
var query = require('../db/connector.js')
var sql = require('../db/sql.js')['USER']

function userDao() {
	this.login = function(account, password) {
		var result;
		query(sql['login'], [account, password], function(err, vals, field) {
			result = vals;
			console.log('vals: ', vals);
			console.log('result:', result);
		});
		console.log('result: ', result);
	}
}

userDao = new userDao();
var result = userDao.login('123', '123')

module.exports = userDao;