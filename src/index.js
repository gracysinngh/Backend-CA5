require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

// TODO 1: Import taskRoutes
const taskRoutes = require("./routes/taskRoutes");

// TODO 2: Use routes → /api/tasks
app.use("/api/tasks", taskRoutes);      

app.get("/", (req, res) => {
  res.send("API Running");
});

// TODO 3: Add error handler (LAST)
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);  
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
