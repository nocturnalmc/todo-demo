const Todo = require('../models/Todo');

// GET /
const getAllTodo = async (req, res) => {
  const allTodo = await Todo.find({});

  if (allTodo.length <= 0) {
    return res.status(404).json({ msg: 'Tiada TODO dijumpai' });
  }

  res.status(200).json({ allTodo });
};

// GET /:todoId
const getSingleTodo = async (req, res) => {
  const singleTodo = await Todo.findOne({
    _id: req.params.todoId,
  });

  if (!singleTodo) {
    return res
      .status(404)
      .json({ msg: `Tiada TODO dengan id ${req.params.todoId}` });
  }

  res.status(200).json({ singleTodo });
};

// POST /
const createTodo = async (req, res) => {
  await Todo.create(req.body);

  res.status(201).json({ msg: 'created' });
};

// PATCH /:toodId
const updateTodo = async (req, res) => {
  const updatedSingleTodo = await Todo.findOneAndUpdate(
    {
      _id: req.params.todoId,
    },
    req.body,
    { new: true }
  );

  if (!updatedSingleTodo) {
    return res
      .status(404)
      .json({ msg: `Tiada TODO dengan id ${req.params.todoId}` });
  }

  res.status(200).json({ msg: 'ok' });
};

// DELETE /delete/:todoId
const deleteTodo = async (req, res) => {
  const singleTodoDeleted = await Todo.findOneAndDelete({
    _id: req.params.todoId,
  });

  if (!singleTodoDeleted) {
    return res
      .status(404)
      .json({ msg: `Tiada TODO dengan id ${req.params.todoId}` });
  }

  res.status(200).json({ msg: 'ok' });
};

module.exports = {
  getAllTodo,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
