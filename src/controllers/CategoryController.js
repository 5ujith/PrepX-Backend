const CategoryService = require("../services/CategoryService");

const categoryService = new CategoryService();

const create = async (req, res) => {
    try {
        const response = await categoryService.createCategory(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Category created successfully",
            err: {}
        });
    }
    catch(err) {
        console.log("Something went wrong in the Category Controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not create category",
            err: err
        });
    }
}

const getAll = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        console.log(categories);
        return res.status(200).json({
            data: categories,
            success: true,
            message: "Categories retrieved successfully",
            err: {}
        });
    }
    catch(err) {
        console.log("Something went wrong in the Category controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not retrieve categories",
            err : err
        });
    }
}

module.exports = {
    create,
    getAll
}