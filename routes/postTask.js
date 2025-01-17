const Task = require('../models/taskSchema');
const datefn = require('date-fns');

const postTask = async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;
        if(datefn.isPast(dueDate)){
            return res.status(400).json({
                error: 'Due date cannot be in the past'
            });
        }
        const newTask = new Task({ title, description, status, dueDate });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = postTask;
