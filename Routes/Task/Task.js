const express =require ('express');
const router =express.Router();
const TaskControler =  require("../../Controllers/task.controller");
const auth = require('../../Middleware/Auth')
router.post('/problems',auth, TaskControler.createProblem);        // Create a new problem
router.get('/problems', auth,TaskControler.getProblems);
router.get('/problems/:id',auth, TaskControler.getProblem);          // Get all problems
router.put('/problems/:id', auth,TaskControler.updateProblem);     // Update a problem by ID
router.delete('/problems/:id', auth,TaskControler.deleteProblem); // Delete a problem by ID
module.exports = router;