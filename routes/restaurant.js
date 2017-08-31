// restaurant.js

var express = require('express');
var router = express.Router();
var restaurantService = require('../src/service/restaurantService');
var restaurantDao = require('../src/dao/restaurantDao');

router.post('/get', function(req, res, next) {
	// if (req.session === undefined) {
	// 	res.render('login');
	// } else {
		// console.log(req.session);
		// 默认账号ID
		var userId = 1;
		dao = new restaurantDao();
		dao.query(userId, function(err, result, undefined) {
			res.send(result);
		});
	// }
});

module.exports = router;