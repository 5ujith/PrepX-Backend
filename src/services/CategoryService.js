const CategoryRepository = require("../repositories/CategoryRepository");

const categoryRepository = new CategoryRepository();

class CategoryService {
    async createCategory(data) {
        try {
            const response = await categoryRepository.createCategory(data);
            return response;
        }
        catch(err) {
            console.log("Something went wrong in Category Service");
            throw { err };
        }
    }

    async getAllCategories() {
        try {
            const categories = await categoryRepository.getAllCategories();
            return categories;
        }
        catch(err) {
            console.log("Something went wrong in Category Service");
            throw { err };
        }
    }
}

module.exports = CategoryService;