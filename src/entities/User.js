const { randomUUID: uuid } = require('crypto');

class User {
  constructor({ email, password, _id }) {
    this._id = _id ? _id : uuid(); 
    this.email = email.toLowerCase();
    this.password = password;
  }

  isValid() {
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

module.exports = { User };