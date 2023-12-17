const Todo = require('../models/todoModel');
const mongoose = require('mongoose');

// Get All Todo
const getTodo = async (req, res) => {
  // Get All Todo With Sort By Priority
  const todo = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(todo);
};

// Get Single Todo
const getOneTodo = async (req, res) => {
  const { id } = req.params;
  // Cheking id on database
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Todo Not Found' });
  }

  const todo = await Todo.findById(id);
  // Todo not found
  if (!todo) {
    return res.status(404).json({ error: 'No such todo' });
  }

  res.status(200).json(todo);
};

// Add New Todo
const createTodo = async (req, res) => {
  const { task, priority } = req.body;
  // If empty Field
  let emptyFields = [];
  if (!task) {
    emptyFields.push('task');
  }
  if (!priority) {
    emptyFields.push('priority');
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please Fill All Field', emptyFields });
  }
  // Add Todo to DB
  try {
    const todo = await Todo.create({ task, priority });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  // Cheking id on database
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Todo Not Found' });
  }
  const todo = await Todo.findOneAndDelete({ _id: id });
  // Todo not found
  if (!todo) {
    return res.status(404).json({ error: 'No such todo' });
  }
  // Response
  res.status(200).json(todo);
};

// Update Todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  // Cheking id on database
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Todo Not Found' });
  }
  const todo = await Todo.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  // Todo not found
  if (!todo) {
    return res.status(404).json({ error: 'No such todo' });
  }
  // Response
  res.status(200).json(todo);
};

module.exports = {
  getTodo,
  getOneTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
