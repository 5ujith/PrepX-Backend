const { ArticleService } = require("../services/index");

const articleService = new ArticleService();

const create = async (req, res) => {
    try {
        const response = await articleService.createArticle(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Article created successfully",
            err: {}
        });
    }
    catch(err) {
        console.log("Something went wrong in the Article Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not create article",
            err: err
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await articleService.updateArticle(req.body, req.params.articleId);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Article updated successfully",
            err: {}
        });
    }
    catch(err) {
        console.log("Something went wrong in the Article Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not update article",
            err: err
        });
    }
}

const getByCategory = async (req, res) => {
    try {
        const {categoryId, page, itemsPerPage} = req.query;
        const articles = await articleService.getArticlesByCategory(categoryId, page, itemsPerPage);
        return res.status(200).json({
            data: articles,
            success: true,
            message: "Articles fetched successfully",
            err: {}
        });
    }
    catch(err) {
        console.log("Something went wrong in the Article Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch articles",
            err: err
        });
    }
}

const getCountByCategory = async (req, res) => {
    try {
        const { categoryId } = req.query;
        const response = await articleService.getArticlesCountByCategory(categoryId);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Articles Count fetched successfully",
            err: {}
        });
    }
    catch(err) {
        console.log("Something went wrong in the Article Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch articles count",
            err: err
        });
    }
}

const getAll = async (req, res) => {
    try {
        const articles = await articleService.getAllArticles();
        return res.status(200).json({
            data: articles,
            success: true,
            message: "Articles fetched successfully",
            err: {}
        });
    }
    catch(err) {
        console.log("Something went wrong in the Article Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch articles",
            err: err
        });
    }
}

const getTrending = async (req, res) => {
    try {
        const {mostVotes, page, itemsPerPage} = req.query;
        const articles = await articleService.getTrendingArticles(mostVotes, page, itemsPerPage);
        return res.status(200).json({
            data: articles,
            success: true,
            message: "Trending articles fetched successfully",
            err: {}
        });
    }
    catch(err) {
        console.log("Something went wrong in the Article Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch trending articles",
            err: err
        });
    }
}

const getByMostVotes = async (req, res) => {
    try {
        const articles = await articleService.getArticlesByMostVotes(req.params.categoryId);
        return res.status(200).json({
            data: articles,
            success: true,
            message: "Most voted articles fetched successfully",
            err: {}
        });
    }
    catch(err) {
        console.log("Something went wrong in the Article Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch most voted articles",
            err: err
        });
    }
}

const getById = async (req, res) => {
    try {
        const article = await articleService.getArticleById(req.params.id);
        return res.status(200).json({
            data: article,
            success: true,
            message: "Article fetched successfully",
            err: {}
        });
    }
    catch(err) {
        console.log("Something went wrong in the Article Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch article",
            err: err
        });
    }
}

const getAllByUserId = async (req, res) => {
    try {
        console.log("correct");
        const articles = await articleService.getArticlesByUserId(req.params.id);
        return res.status(200).json({
            data: articles,
            success: true,
            message: "Articles fetched successfully",
            err: {}
        });
    }
    catch(err) {
        console.log("Something went wrong in the Article Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch articles",
            err: err
        });
    }
}

module.exports = {
    create,
    getByCategory,
    getAll,
    getById,
    update,
    getAllByUserId,
    getTrending,
    getByMostVotes,
    getCountByCategory
}