const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Habit', TodoSchema);