const { CommentService } = require("../services/index");

const commentService = new CommentService();

const create = async (req, res) => {
    try {
        const response = await commentService.createComment(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Comment created successfully",
            err: {}
        });
    }
    catch(err) {
        console.log("Something went wrong in the Comment Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not create Comment",
            err: err
        });
    }
}


const getAll = async (req, res) => {
    try {
        const comments = await commentService.getAllComments(req.params.articleId);
        return res.status(200).json({
            data: comments,
            success: true,
            message: "Comments fetched successfully",
            err: {}
        });
    }
    catch(err) {
        console.log("Something went wrong in the Comment Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch comments",
            err: err
        });
    }
}

module.exports = {
    create,
    getAll
}