const { UserService } = require("../services/index");

const userService = new UserService();

const get = async (req, res) => {
    try {
        const user = await userService.getUser(req.query.userName, req.query.password);
        return res.status(200).json({
            data: user,
            success: true,
            message: "User retrieved sucessfully",
            err: {}
        })

    }
    catch(err) {
        console.log("Something went wrong in User Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not retrieve user",
            err: {err}
        })
    }
}

const getByUserId = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        return res.status(200).json({
            data: user,
            success: true,
            message: "User retrieved sucessfully",
            err: {}
        })

    }
    catch(err) {
        console.log("Something went wrong in User Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not retrieve user",
            err: {err}
        })
    }
}

const create = async (req, res) => {
    try {
        const response = userService.createUser(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "User created sucessfully",
            err: {}
        })

    }
    catch(err) {
        console.log("Something went wrong in User Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not create user",
            err: {err}
        })
    }
}

const update = async (req, res) => {
    try {
        const response = userService.updateUser(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "User updated sucessfully",
            err: {}
        })

    }
    catch(err) {
        console.log("Something went wrong in User Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not update user",
            err: {err}
        })
    }
}

const getAllFollowing = async (req, res) => {
    try {
        const user = await userService.getAllFollowing(req.params.userId);
        return res.status(200).json({
            data: user,
            success: true,
            message: "Following users retrieved sucessfully",
            err: {}
        })

    }
    catch(err) {
        console.log("Something went wrong in User Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not retrieve following users",
            err: {err}
        })
    }
}

const upload = async (req, res) => {
    try {
        const {image} = req.body;
        const response = await userService.uploadProfileImage(image);
        return res.status(201).json({
            data: response,
            success: true,
            message: "User profile image uploaded sucessfully",
            err: {}
        })

    }
    catch(err) {
        console.log("Something went wrong in User Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not upload user profile image",
            err: {err}
        })
    }
}

module.exports = {
    get,
    create,
    update,
    getAllFollowing,
    getByUserId,
    upload
}