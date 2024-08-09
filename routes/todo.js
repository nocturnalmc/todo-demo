const express = require('express');
const router = express.Router();
const {
  getAllTodo,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todo');

router.route('/').get(getAllTodo).post(createTodo);
router.route('/:todoId').get(getSingleTodo).patch(updateTodo);
router.route('/delete/:todoId').delete(deleteTodo);

module.exports = router;
