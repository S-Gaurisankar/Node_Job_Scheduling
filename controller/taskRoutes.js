const Task = require('../models/taskSchema');
const express = require('express');
const router = express.Router();
const deleteTaskById = require('../routes/deleteTaskById');
const postTask = require('../routes/postTask');
const putTaskById = require('../routes/putTaskById');
const getTasks = require('../routes/getTasks');
const getTaskById = require('../routes/getTaskById');

// GET /tasks
router.get('/', getTasks);

// GET /tasks/:id
router.get('/:id', getTaskById);

// POST /tasks
router.post('/', postTask);

// PUT /tasks/:id
router.put('/:id', putTaskById);

// DELETE /tasks/:id
router.delete('/:id', deleteTaskById);

module.exports = router;
