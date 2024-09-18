const mongoose = require('mongoose');
const categoryModal = require('./category.modal');

const TaskSchema = new mongoose.Schema({
  problem: { type: String, required: true },
  article: { type: String },
  youtube: { type: String },
  practice: { type: String },
  difficulty: { type: String }, 
  revision: { type: Boolean, default: false },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
},{timeseries:true});

module.exports = mongoose.model('Task', TaskSchema);
