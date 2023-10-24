const { User } = require("../models/index");
const cloudinary = require("../utils/cloudinary");

class UserRepository {
    async getUser(userName) {
        try {
            const user = await User.findOne({
                where: {
                    userName
                }
            });
            return user;
        }
        catch(err) {
            console.log("Something went wrong in the User Repository layer");
            throw { err };
        }
    }

    async getUserById(userId) {
        try {
            const user = await User.findOne({
                where: {
                    id: userId
                }
            });
            return user;
        }
        catch(err) {
            console.log("Something went wrong in the User Repository layer");
            throw { err };
        }
    }

    async createUser(data) {
        try {
            const response = await User.create(data);
            return response;
        }
        catch(err) {
            console.log("Something went wrong in the User Repository layer");
            throw { err };
        }
    }

    async updateUser(userId, data) {
        try {
            const response = await User.update({ ...data }, {
                where: {
                    id: userId
                }
            });
            return response;
        }
        catch(err) {
            console.log("Something went wrong in the User Repository layer");
            throw { err };
        }
    }

    async getAllFollowing(userId) {
        try {
            const user = await User.findOne({
                where: {
                    id: userId
                }
            });
            const following = user?.following.split(";").map((ele) => {
                return Number(ele);
            });
            const users = await User.findAll({
                where: {
                    id: following
                }
            });
            return users;
        }
        catch(err) {
            console.log("Something went wrong in the User Repository layer");
            throw { err };
        }
    }

    async uploadProfileImage(data) {
        try {
            const uploadedImage = await cloudinary.uploader.upload(data, {
                upload_preset: 'yomkeyug',
                allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp']
            });
            return uploadedImage;
        }
        catch(err) {
            console.log("Something went wrong in the User Repository layer");
            console.log(err);
            throw { err };
        }
    }
}

module.exports = UserRepository;