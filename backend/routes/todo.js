const express = require('express');
const {
  getTodo,
  getOneTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require('../controllers/todoController');

const router = express.Router();

// Get All Todo
router.get('/', getTodo);

// Get a Single Todo
router.get('/:id', getOneTodo);

// Add New Todo
router.post('/', createTodo);

// Delete Todo
router.delete('/:id', deleteTodo);

//Update Todo
router.patch('/:id', updateTodo);

module.exports = router;
