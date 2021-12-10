const { middleware_cors } = require('./middleware_cors');
const { middleware_jwt } = require('./middleware_jwt');

module.exports =  {
  middleware_cors,
  middleware_jwt,
};