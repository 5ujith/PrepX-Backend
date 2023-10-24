const ArticleRepository = require("../repositories/ArticleRepository");

const articleRepository = new ArticleRepository();

class ArticleService {
    async createArticle(data) {
        try {
            const response = await articleRepository.createArticle(data);
            return response;
        }
        catch(err) {
            console.log("Something went wrong in the Article Service");
            throw { err }; 
        }
    }

    async updateArticle(data, articleId) {
        try {
            const response = await articleRepository.updateArticle(data, articleId);
            return response;
        }
        catch(err) {
            console.log("Something went wrong in the Article Service");
            throw { err }; 
        }
    }

    async getArticlesByCategory(categoryId, page, itemsPerPage) {
        try {
            const articles = await articleRepository.getArticlesByCategory(categoryId, page, itemsPerPage);
            return articles;
        }
        catch(err) {
            console.log("Something went wrong in the Article Service");
            throw { err }; 
        }
    }

    async getArticlesCountByCategory(categoryId) {
        try {
            const response = await articleRepository.getArticlesCountByCategory(categoryId);
            return response;
        }
        catch(err) {
            console.log("Something went wrong in the Article Service");
            throw { err }; 
        }
    }

    async getAllArticles() {
        try {
            const articles = await articleRepository.getAllArticles();
            return articles;
        }
        catch(err) {
            console.log("Something went wrong in the Article Service");
            throw { err }; 
        }
    }

    async getArticleById(id) {
        try {
            const article = await articleRepository.getArticleById(id);
            return article;
        }
        catch(err) {
            console.log("Something went wrong in the Article Service");
            throw { err }; 
        }
    }

    async getArticlesByUserId(userId) {
        try {
            const articles = await articleRepository.getArticlesByUserId(userId);
            return articles;
        }
        catch(err) {
            console.log("Something went wrong in the Article Service");
            throw { err }; 
        }
    }

    async getTrendingArticles(sortByMostVotes, page, itemsPerPage) {
        try {
            const articles = await articleRepository.getTrendingArticles(sortByMostVotes, page, itemsPerPage);
            return articles;
        }
        catch(err) {
            console.log("Something went wrong in the Article Service");
            throw { err }; 
        }
    }

    async getArticlesByMostVotes(categoryId) {
        try {
            const articles = await articleRepository.getArticlesByMostVotes(categoryId);
            return articles;
        }
        catch(err) {
            console.log("Something went wrong in the Article Service");
            throw { err }; 
        }
    }
}

module.exports = ArticleService;