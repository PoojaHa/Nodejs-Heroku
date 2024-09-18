// const CategoryModel = require("../Modals/category.modal");
const { default: mongoose } = require("mongoose");
const taskModel = require("../Modals/task.modal");


exports.createProblem = async (req, res) => {
    try {
      const newProblem = new taskModel(req.body);
      const savedProblem = await newProblem.save();
      res.status(201).json(savedProblem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // exports.getAllproblemBycategory  = async (req,res) =>{
  //   try{
  //     const { categoryId }  = req.query
  //     const problems = await taskModel.find({ category:categoryId })
  //     if(problems.length == 0){
  //       res.status(400).json({message:error.message});
  //     }
  //     res.status(200).json(problems);
  //     3
  //   }catch(error){
  //     res.status(400).json({ message: error.message });
  //   }
  // }
  exports.getProblems = async (req, res) => {
    try {
      const problems = await taskModel.find({...req.query});
      res.status(200).json(problems);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.getProblem = async (req, res) => {
    try {
      const problemId = req.params.id;
      const problems = await taskModel.findById(problemId).populate('category');
      res.status(200).json(problems);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateProblem = async (req, res) => {
    try {
      const updatedProblem = await taskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedProblem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  exports.deleteProblem = async (req, res) => {
    try {
      await taskModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Problem deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };