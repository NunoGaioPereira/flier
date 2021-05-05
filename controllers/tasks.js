const Task = require('../models/Task');
const RitualDay = require('../models/RitualDay');


// @desc   Get task day
// @route  GET /api/v1/tasks
// @access Public
exports.getTasks = async (req, res, next) => {
	try {
		const task = await Task.find();

		return res.status(200).json({
			success: true,
			data: task
		});
	}
	catch (err) {
		console.log(err)
		return res.send(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}

// @desc   Create task day
// @route  POST /api/v1/tasks
// @access Public
exports.createTask = async (req, res, next) => {
	try {
		const Task = await Task.find();

		return res.status(200).json({
			success: true,
			data: Task
		});
	}
	catch (err) {
		return res.send(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}

// @desc   Update task day
// @route  POST /api/v1/tasks/:id
// @access Public
exports.editTask = async (req, res, next) => {
	try {
		const Task = await Task.find();

		return res.status(200).json({
			success: true,
			data: Task
		});
	}
	catch (err) {
		return res.send(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}

// @desc   Delete task day
// @route  DELETE /api/v1/tasks/:id
// @access Public
exports.deleteTask = async (req, res, next) => {
	try {
		const Task = await Task.find();

		return res.status(200).json({
			success: true,
			data: Task
		});
	}
	catch (err) {
		return res.send(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}
