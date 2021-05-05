const express = require('express');
const router = express.Router();
const { getTasks, createTask, deleteTask, editTask } = require('../controllers/tasks');

router
	.route('/')
	.get(getTasks)
	.post(createTask);

router
	.route('/:id')
	.post(editTask)
	.delete(deleteTask);

module.exports = router;