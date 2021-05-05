const RitualDay = require('../models/RitualDay');


// @desc   Get ritual day
// @route  GET /api/v1/rituals
// @access Public
exports.getRitualDay = async (req, res, next) => {
	try {
		const ritualDay = await RitualDay.find();

		return res.status(200).json({
			success: true,
			data: ritualDay
		});
	}
	catch (err) {
		return res.send(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}

// @desc   Get ritual day
// @route  POST /api/v1/rituals
// @access Public
exports.createRitualDay = async (req, res, next) => {
	try {
		const ritualDay = await RitualDay.find();

		return res.status(200).json({
			success: true,
			data: ritualDay
		});
	}
	catch (err) {
		return res.send(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}

// @desc   Update ritual day
// @route  POST /api/v1/rituals/:id
// @access Public
exports.editRitualDay = async (req, res, next) => {
	try {
		const ritualDay = await RitualDay.find();

		return res.status(200).json({
			success: true,
			data: ritualDay
		});
	}
	catch (err) {
		return res.send(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}

// @desc   Delete ritual day
// @route  DELETE /api/v1/rituals/:id
// @access Public
exports.deleteRitualDay = async (req, res, next) => {
	try {
		const ritualDay = await RitualDay.find();

		return res.status(200).json({
			success: true,
			data: ritualDay
		});
	}
	catch (err) {
		return res.send(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}
