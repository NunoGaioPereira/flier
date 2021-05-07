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

// @desc   Delete task day
// @route  DELETE /api/v1/tasks/:id
// @access Public
router.get('/delete/:id', async (req, res, next) => {
	try {
        const task = await Task.findById(req.params.id);

        if(!task) {
            return res.status(404).json({
                success: false,
                error: 'No task found'
            });
        }

        await task.remove();
        res.redirect('/tasks');
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
});


module.exports = router;