const Task = require('../models/taskSchema');
const express = require('express');
const router = express.Router();
const deleteTaskById = require('../routes/deleteTaskById');
const postTask = require('../routes/postTask');
const putTaskById = require('../routes/putTaskById');
const getTasks = require('../routes/getTasks');

// GET /tasks
router.get('/', getTasks);

// POST /tasks
router.post('/', postTask);

// PUT /tasks/:id
router.put('/:id', putTaskById);

// DELETE /tasks/:id
router.delete('/:id', deleteTaskById);

module.exports = router;
