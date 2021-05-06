const Task = require('../models/Task');
const RitualDay = require('../models/RitualDay');


// @desc   Get task day
// @route  GET /api/v1/tasks
// @access Public
exports.getTasks = async (req, res, next) => {
	try {
		const Tasks = await Task.find();

		return res.status(200).json({
			success: true,
			data: Tasks
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
		const { task } = req.body;

		const newTask = await Task.create(req.body);
		// const newTask = new Task({ task });

		//res.redirect('/tasks');

		return res.status(201).json({
            success: true,
            data: newTask
        });
	}
	catch (err) {
		console.log(err);
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
