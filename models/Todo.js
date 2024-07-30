const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
  {
    // model todo
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', TodoSchema);
