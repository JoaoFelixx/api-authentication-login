const jwt = require('jsonwebtoken');
const secretKey = require('../../secret');

exports.middleware_jwt = (request, response, next) => {
	const { authorization  } = request.headers;

	if (!authorization) return response.sendStatus(401);

	const token = authorization.replace('Bearer', '').trim();

	try {
	 	const data = jwt.verify(token, secretKey)

		next();
	} catch (err) {
	 	return response.sendStatus(401);
	} 
}