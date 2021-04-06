const mongoose = require('mongoose');

const HabitDaySchema = new mongoose.Schema({
    habit: { type: String, ref: 'Habit' },
    day: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HabitDay', TodoSchema);