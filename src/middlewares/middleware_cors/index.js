const cors = require('cors');

exports.middleware_cors = cors(), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
	next();
}