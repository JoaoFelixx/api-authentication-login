const { v4 } = require('uuid');
const bcrypt = require('bcryptjs');

class User {
  constructor ({ email, password, _id }) {
    this._id = !_id ? v4() : _id;
    this.email = email;
    this.password = bcrypt.hashSync(password, 8);
  }

  isValid( ){
    const propertyNames = Object.getOwnPropertyNames(this);
    const amountInvalid = propertyNames
      .map(property => (!!this[property]) ? null : `${property} is missing`)
      .filter(item => !!item)

    return {
    	valid: amountInvalid.length === 0,
    	error: amountInvalid
  	}
  }
}

module.exports = User;