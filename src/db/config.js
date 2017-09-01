// config.js

var CONFIG = {}

CONFIG['ONLINE'] = {
	host     : '43.248.96.156',
	user     : 'root',
	password : '123456',
	port     : '3306',
	database : 'iwannaeat',
	charset  : 'gbk',
}

CONFIG['TEST'] = {
	host     : '127.0.0.1',
	user     : 'root',
	password : '123456',
	port     : '3306',
	database : 'iwannaeat',
	charset  : 'gbk',
}

module.exports = CONFIG