const CategoryModel = require("../Modals/category.modal");
const taskModel = require("../Modals/task.modal");

exports.createCategory = async (req, res) => {
    try {
      const newProblem = new CategoryModel(req.body);
      const savedProblem = await newProblem.save();
      res.status(201).json(savedProblem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  exports.getCategory = async (req, res) => {
    try {
      const problems = await CategoryModel.find({});
      res.status(200).json(problems);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateCategory = async (req, res) => {
    try {
      const updatedProblem = await CategoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedProblem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  exports.deleteCategory = async (req, res) => {
    try {
      await CategoryModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Problem deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };