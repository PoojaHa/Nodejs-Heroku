const mongoose = require('mongoose');
const categoriesSchema = new mongoose.Schema({
  categoriesTitle: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model('category', categoriesSchema);
