const express = require('express');
const router = express.Router();
const { getRitualDay, createRitualDay, deleteRitualDay, editRitualDay } = require('../controllers/rituals');

router
	.route('/')
	.get(getRitualDay)
	.post(createRitualDay);

router
	.route('/:id')
	.post(editRitualDay)
	.delete(deleteRitualDay);

module.exports = router;