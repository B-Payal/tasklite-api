const express = require("express");
const router = express.Router();

const { getTasks, createTask } = require("../utils/fakeDB");

// TODO 1: Convert this route to async/await with try/catch
router.get("/", async (req, res) => {
  try{
    const data = await getTasks();
  res.status(200).json(data);
  }catch(err){
    return res.status(500).json({message:"server error"})
  }
});

router.post('/api/tasks' , async (req,res)=>{
  try {
    const {title} = req.body;
    if(!title){
      return res.status(400).json({
  "success": false,
  "message": "Title is required"
})
    }
    const newTask = await createTask(title)
    return res.status(201).json({title:newTask})

    
  } catch (error) {
   return res.status(500).json({message:"server error"})
    
  }
})
// TODO 2: Implement POST /api/tasks
// - Accept { title }
// - If title missing → return 400
// - Else create task and return it

module.exports = router;
