const jwt = require('jsonwebtoken');
const { promisify } = require('util')
const secretKey = require('../../secret');

const middlewareJwt = async (request, response, next) => {
	try {
		const { authorization } = request.headers;

		if (!authorization) return response.sendStatus(401);

		const token = authorization.replace('Bearer', '').trim();
		
		await promisify(jwt.verify)(token, secretKey)

		return next();

	} catch (err) {
		return response.sendStatus(401);
	}
}

module.exports = { middlewareJwt };