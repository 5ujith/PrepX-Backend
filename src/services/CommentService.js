const { CommentRepository } = require("../repositories/index");

const commentRepository = new CommentRepository();

class CommentService {
    async createComment(data) {
        try {
            const response = await commentRepository.createComment(data);
            return response;
        }
        catch(err) {
            console.log("Something went wrong in the Comment Service");
            throw { err }; 
        }
    }

    async getAllComments(articleId) {
        try {
            const comments = await commentRepository.getAllComments(articleId);
            return comments;
        }
        catch(err) {
            console.log("Something went wrong in the Comment Service");
            throw { err }; 
        }
    }

}

module.exports = CommentService;