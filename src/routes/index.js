const express = require("express");
const UserController = require("../controllers/UserController");
const CategoryController = require("../controllers/CategoryController");
const ArticleController = require("../controllers/ArticleController");
const CommentController = require("../controllers/CommentController");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("hey");
})

// User Endpoints
router.post("/api/register", UserController.create);
router.get("/api/login", UserController.get);
router.patch("/api/user/:id", UserController.update);
router.get("/api/user/:id", UserController.getByUserId);
router.get("/api/user/following/:userId", UserController.getAllFollowing);
router.post("/api/user/profile/image", UserController.upload);

// Category Endpoints
router.get("/api/categories", CategoryController.getAll);
router.post("/api/category", CategoryController.create);

// Article Endpoints
router.post("/api/article", ArticleController.create);
router.get("/api/article", ArticleController.getByCategory);
router.get("/api/article/count", ArticleController.getCountByCategory);
router.get("/api/articles", ArticleController.getAll);
router.get("/api/articles/trending", ArticleController.getTrending);
router.get("/api/articles/:categoryId/mostVotes", ArticleController.getByMostVotes);
router.get("/api/user/:id/articles", ArticleController.getAllByUserId);
router.get("/api/article/:id", ArticleController.getById);
router.patch("/api/article/:articleId", ArticleController.update);

// Comment Endpoints
router.post("/api/article/:articleId/comment", CommentController.create);
router.get("/api/article/:articleId/comments", CommentController.getAll);

module.exports = router;