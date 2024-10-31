const express = require('express');
const app = express();
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require("cors")

app.use(express.json());
app.use(cors());


app.get('/todos', async (req,res)=>{
    const todos = await todo.find();
    res.json({
        todos
    })
})

app.post('/todo', async (req,res)=>{
    const payload = req.body;
   const parsedPayload = createTodo.safeParse(payload);

   if (!parsedPayload.success){
    res.status(411).json({
        msg: "you sent wrong inputs"
    })
    return;
   }

   await todo.create({
    title: payload.title,
    description: payload.description,
    completed: false,
   })
   res.json({
    msg :"todo created"
   })
})

app.put('/todo/:id', async (req,res)=>{
    // completed task by id
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);

    if (!parsedPayload.success){
        res.status(411).json({
            msg: "you sent wring inputs"
        })
        return;
    }

    await todo.update({
        _id : req.body.id
    },{
        completed: true
    })
    res.json({
        msg:"updated todo"
    })
})

// app.delete('/todo/:id', (req,res)=>{
   
// })

// app.update('/todo/:id', (req,res)=>{
   
// })


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})