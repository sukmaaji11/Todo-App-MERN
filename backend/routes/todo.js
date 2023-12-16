const express = require("express");
const Todo = require("../models/todoModel");

const router = express.Router();

// Get All Todo
router.get("/", (req, res) => {
  res.json({ msg: "Get All Todo" });
});

// Get a Single Todo
router.get("/:id", (res, req) => {
  res.json({ msg: "Get Single Todo" });
});

// Add New Todo
router.post("/", async (req, res) => {
  const { task, priority } = req.body;
  try {
    const todo = await Todo.create({ task, priority });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Todo
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete Todo" });
});

//Update Todo
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update Todo" });
});

module.exports = router;
