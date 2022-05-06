const { mysql } = require('../connection');

class UserRepository {
  async get(email) {
    return await mysql.promise().execute(
      'SELECT * FROM  `users` WHERE email = ?',
      [email]
    )
  }

  async create({ email, password, _id }) {
    return await mysql.promise().execute(
      'INSERT INTO `users` (_id, email, password) VALUES (?,?,?)',
      [_id, email, password]
    )
  }

  async delete(_id) {
    return await mysql.promise().execute(
      'DELETE FROM `users` WHERE _id = ?',
      [_id]
    )
  }

  async update({ _id, email, password }) {
    return await mysql.promise().execute(
      'UPDATE `users` SET  email = ?, password = ? WHERE _id = ?',
      [email, password, _id]
    )
  }
}

module.exports = UserRepository;