const Task = require('../models/taskSchema');
const datefn= require('date-fns');

const putTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        // Check if all required fields are present in the request body
        const requiredFields = ['title', 'description', 'status', 'dueDate'];
        const missingFields = requiredFields.filter(field => !updates.hasOwnProperty(field));
        
        // Validate status enum values
        const validStatuses = ['Pending', 'In Progress', 'Completed'];
        if (updates.status && !validStatuses.includes(updates.status)) {
            return res.status(400).json({
                error: `Invalid status value. Must be one of: ${validStatuses.join(', ')}`
            });
        }
        if (missingFields.length > 0) {
            return res.status(400).json({
                error: `Missing required fields: ${missingFields.join(', ')}`
            });
        }

        if(updates.title.length < 0){
            return res.status(400).json({
                error: 'Title should not be empty'
            });
        }

        if(updates.description.length < 0){
            return res.status(400).json({
                error: 'Description should not be empty'
            });
        }


        // Validate if dueDate is a valid date
        if (updates.dueDate && isNaN(new Date(updates.dueDate).getTime())) {
            return res.status(400).json({
                error: 'Invalid dueDate format'
            });
        }

        if(datefn.isPast(updates.dueDate)){
            return res.status(400).json({
                error: 'Due date cannot be in the past'
            });
        }

        const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = putTaskById;
