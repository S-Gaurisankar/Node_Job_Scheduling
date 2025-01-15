const mongoose = require('mongoose');

// Define Task schema
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
    dueDate: { type: Date, required: true },
}, { collection: 'task_collection' }); // Specify the custom collection name

// Create Task model based on the schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

