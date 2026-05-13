require("dotenv").config();
const express = require("express");
const taskRoutes = require('./routes/taskRoutes')
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());

// TODO 1: Import taskRoutes
// TODO 2: Use routes → /api/tasks

// app.get("/", (req, res) => {
//   res.send("API Running");
// });

app.use('/' , taskRoutes);

app.use(errorHandler);
// TODO 3: Add error handler (LAST)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
