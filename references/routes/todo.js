const express = require('express');
const router = express.Router();
const {
  getAllTodo,
  getSingleTodo,
  createTodo,
  updateTodo,
  softDeleteTodo,
} = require('../controllers/todo');

router.route('/').get(getAllTodo).post(createTodo);
router.route('/:todoId').get(getSingleTodo).patch(updateTodo);
router.route('/delete/:todoId').patch(softDeleteTodo);

module.exports = router;
