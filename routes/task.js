const express = require('express');
const router = express.Router();
const moment = require('moment');
const Task = require('../models/Task');

router.get('/', (req, res) => {
	//const tasks = axiosTest();

	Task.find({}, (err, tasks) => {
		res.render('tasks',  { moment: moment, pageTitle: 'Tasks', tasks: tasks});
	});
	
	//console.log(err);
});

// @desc   Create task day
// @route  POST /api/v1/tasks
// @access Public
router.post('/create', async (req, res) => {
	try {
		const { task } = req.body;

		const newTask = await Task.create(req.body);

		res.redirect('/tasks');
	}
	catch (err) {
		console.log(err);
		return res.send(500).json({
			success: false,
			error: 'Server Error'
		});
	}
});

module.exports = router;