const Todo = require('../models/Todo');

// GET /
const getAllTodo = async (req, res) => {
  // find all todo
};

// GET /:todoId
const getSingleTodo = async (req, res) => {
  // find single
};

// POST /
const createTodo = async (req, res) => {
  // create todo
};

// PATCH /:toodId
const updateTodo = async (req, res) => {
  // update todo
};

// PATCH /delete/:todoId
const deleteTodo = async (req, res) => {
  // delete todo
};

module.exports = {
  getAllTodo,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
