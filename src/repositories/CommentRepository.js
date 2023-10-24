const { comment } = require("../models/index");

class CommentRepository {
    async createComment(data) {
        try {
            const response = await comment.create(data);
            return response;
        }
        catch(err) {
            console.log("Something went wrong in the Comment Repository");
            console.log(err);
            throw { err };
        }
    }

    async getAllComments(articleId) {
        try {
            const comments = await comment.findAll({
                where: {
                    articleId
                }
            });
            return comments;
        }
        catch(err) {
            console.log("Something went wrong in the Comment Repository");
            console.log(err);
            throw { err };
        }
    }
}

module.exports = CommentRepository;