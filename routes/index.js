// index.js
var express = require('express');
var router = express.Router();
var restaurantService = require('../src/service/restaurantService')

router.get('/', function(req, res, next) {
	// if (req.session === undefined) {
	// 	res.render('login');
	// } else {
		// console.log(req.session);
		// 默认账号ID
		var userId = 1;
		var result;
		restaurantService.query(userId, function(err, rows, fields) {
			console.log(rows);
		});
		res.render('index', result)
	// }
});

module.exports = router;