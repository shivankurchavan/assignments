const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://shiv:87654321@cluster0.q2tvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/harkiratW5")
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed: Boolean,
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo: todo,
}