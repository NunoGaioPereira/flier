const RitualDay = require('../models/RitualDay');

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