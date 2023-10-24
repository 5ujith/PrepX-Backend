const { category } = require("../models/index");

class CategoryRepository {
    async createCategory(data) {
        try {
            const response = await category.create(data);
            return response;
        }
        catch(err) {
            console.log("Something went wrong in Category Repository");
            console.log(err);
            throw { err };
        }
    }

    async getAllCategories() {
        try {
            const categories = await category.findAll();
            return categories;
        }
        catch(err) {
            console.log("Something went wrong in Category Repository");
            throw { err };
        }   
    }
}

module.exports = CategoryRepository;