const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
  {
    jenisTodo: { type: String, default: '' },
    contentTodo: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', TodoSchema);