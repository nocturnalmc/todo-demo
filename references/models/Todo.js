const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
  {
    jenisTodo: { type: String, default: '' },
    tajukTodo: { type: String, required: true },
    isiTodo: { type: String, required: true },
    doneTodo: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', TodoSchema);
