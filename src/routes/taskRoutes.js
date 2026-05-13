const express = require("express");
const router = express.Router();

const { getTasks, createTask } = require("../utils/fakeDB");

// TODO 1: Convert this route to async/await with try/catch

try { 
  router.get("/", async (req, res) => {
    const tasks = await getTasks();
    res.json(tasks);
  }   
)} catch (err) {
  console.error(err);
  res.status(500).json({ success: false, message: "Internal Server Error" });
}                                       
// TODO 2: Implement POST /api/tasks
// - Accept { title }
// - If title missing → return 400
// - Else create task and return it
router.post("/", async (req, res) => {
  const { title } = req.body;   
  if (!title) { 
    return res.status(400).json({ success: false, message: "Title is required" });
  } 
  try {
    const newTask = await createTask(title);
    res.status(201).json(newTask);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}); 

module.exports = router;
