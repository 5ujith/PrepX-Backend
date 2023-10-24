const { article, User } = require("../models/index");

class ArticleRepository {
    async createArticle(data) {
        try {
            const response = await article.create(data);
            return response;
        }
        catch(err) {
            console.log("Something went wrong in the Article Repository");
            console.log(err);
            throw { err };
        }
    }

    async updateArticle(data, articleId) {
        try {
            console.log("Artcile id => ", articleId);
            const response = await article.update({...data}, {
                where: {
                    id: articleId,
                }
            });
            return response;
        }
        catch(err) {
            console.log("Something went wrong in the Article Repository");
            console.log(err);
            throw { err };
        }
    }

    async getArticlesByCategory(categoryId, page, itemsPerPage) {
        try {
            console.log(page, itemsPerPage, "hello");
            const offset = (Number(page) - 1) * Number(itemsPerPage);
            const articles = await article.findAll({
                where: {
                    categoryId
                },
                offset: offset,
                limit: Number(itemsPerPage),
                include: {
                    model: User
                }
            });
            return articles;
        }
        catch(err) {
            console.log("Something went wrong in the Article Repository by cat");
            throw { err };
        }
    }

    async getArticlesCountByCategory(categoryId) {
        try {
            if(Number(categoryId) === 1) {
                const {count} = await article.findAndCountAll();
                return {"count": count};
            }
            else {
                const {count} = await article.findAndCountAll({
                    where: {
                        categoryId
                    },
                });
                return {"count": count};
            }
        }
        catch(err) {
            console.log("Something went wrong in the Article Repository");
            throw { err };
        }
    }

    async getAllArticles() {
        try {
            const articles = await article.findAll({
                include: {
                    model: User
                }
            });
            return articles;
        }
        catch(err) {
            console.log("Something went wrong in the Article Repository");
            console.log(err);
            throw { err };
        }
    }

    async getArticleById(id) {
        try {
            const response = await article.findByPk(id, {
                include: {
                    model: User
                }
            });
            return response;
        }
        catch(err) {
            console.log("Something went wrong in the Article Repository");
            console.log(err);
            throw { err };
        }
    }

    async getArticlesByUserId(userId) {
        try {
            console.log("by userId");
            const response = await article.findAll({
                include: {
                    model: User
                },
                where: {
                    authorId: userId
                }
            });
            return response;
        }
        catch(err) {
            console.log("Something went wrong in the Article Repository");
            console.log(err);
            throw { err };
        }
    }

    async getTrendingArticles(sortByMostVotes, page, itemsPerPage) {
        try {
            let order = [['views', 'DESC']];
            if(sortByMostVotes) {
                order.push(['upvotes', 'DESC']);
            };
            let offset = (page - 1) * itemsPerPage;
            const articles = await article.findAll({
                include: {
                    model: User
                },
                limit: Number(itemsPerPage),
                offset: offset,
                order: order
            });
            return articles;
        }
        catch(err) {
            console.log("Something went wrong in the Article Repository");
            console.log(err);
            throw { err };
        }
    }

    async getArticlesByMostVotes(categoryId) {
        try {
            const articles = await article.findAll({
                include: {
                    model: User
                },
                where: {
                    categoryId
                },
                order: [
                    ['upvotes', 'DESC']
                ]
            });
            return articles;
        }
        catch(err) {
            console.log("Something went wrong in the Article Repository");
            console.log(err);
            throw { err };
        }
    }
}

module.exports = ArticleRepository;