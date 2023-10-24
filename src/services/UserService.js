const { UserRepository } = require("../repositories/index");

const userRepository = new UserRepository();

class UserService {
    async createUser(data) {
        try {
            const response = await userRepository.createUser(data);
            return response;
        }
        catch(err) {
            console.log("Something went wrong in User Service");
            throw { err };
        }
    }

    async getUser(userName, password) {
        try {
            const user = await userRepository.getUser(userName);
            if(password === user.password) {
                Object.assign(user.dataValues, {valid: true});
            }
            else {
                Object.assign(user.dataValues, {valid: false});
            }
            return user;
        }
        catch(err) {
            console.log("Something went wrong in User Service");
            throw { err };
        }
    }

    async getUserById(userId) {
        try {
            const user = await userRepository.getUserById(userId);
            return user;
        }
        catch(err) {
            console.log("Something went wrong in User Service");
            throw { err };
        }
    }

    async updateUser(userId, data) {
        try {
            const response = await userRepository.updateUser(userId, data);
            return response;
        }
        catch(err) {
            console.log("Something went wrong in User Service");
            throw { err };
        }
    }

    async getAllFollowing(userId) {
        try {
            const users = await userRepository.getAllFollowing(userId);
            return users;
        }
        catch(err) {
            console.log("Something went wrong in User Service");
            throw { err };
        }
    }

    async uploadProfileImage(data) {
        try {
            const response = await userRepository.uploadProfileImage(data);
            return response;
        }
        catch(err) {
            console.log("Something went wrong in User Service");
            throw { err };
        }
    }
}

module.exports = UserService;