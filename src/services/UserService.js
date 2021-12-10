const { UserRepository } = require('../repository');
const userRepository = new UserRepository(); 


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

  static async auth(_id) {
    
  }
}

module.exports = UserService;