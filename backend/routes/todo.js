const express = require("express");
const {
  getTodo,
  getOneTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Require auth for all todo
router.use(requireAuth);

// Get All Todo
router.get("/", getTodo);

// Get a Single Todo
router.get("/:id", getOneTodo);

// Add New Todo
router.post("/", createTodo);

// Delete Todo
router.delete("/:id", deleteTodo);

//Update Todo
router.patch("/:id", updateTodo);

module.exports = router;
