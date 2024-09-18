const express = require ('express');
const router =express.Router();
const CatergoryController =  require("../../Controllers/category.controller");
const auth = require('../../Middleware/Auth')
router.post('/Category', auth,CatergoryController.createCategory);        // Create a new problem
router.get('/Category', auth,CatergoryController.getCategory);           // Get all problems
router.put('/Category/:id', auth,CatergoryController.updateCategory);     // Update a problem by ID
router.delete('/Category/:id', auth,CatergoryController.deleteCategory);  // Delete a problem by ID
module.exports = router;