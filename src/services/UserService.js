const { userRepository } = require('../repository');

class UserService {

  static async getOne(email) {
    return await userRepository.get(email)
  }

  static async create(user) {
    return await userRepository.create(user)
  }

  static async delete(_id) {
    return await userRepository.delete(_id)
  }

  static async update(user) {
    return await userRepository.update(user)
  }
}

module.exports = { UserService };