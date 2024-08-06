const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
  {
    jenisTodo: { type: String, default: '' },
    tajukTodo: { type: String, default: '' },
    isiTodo: { type: String, default: '' },
    doneTodo: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', TodoSchema);
