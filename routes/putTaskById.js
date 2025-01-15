const Task = require('../models/taskSchema');

const putTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = putTaskById;
