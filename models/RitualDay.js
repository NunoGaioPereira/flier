const mongoose = require('mongoose');

const RitualDaySchema = new mongoose.Schema({
    health: { type: Boolean, default: false },
    emotions: { type: Boolean, default: false },
    relationships: { type: Boolean, default: false },
    lifestyle: { type: Boolean, default: false },
    growth: { type: Boolean, default: false },
    mission: { type: Boolean, default: false },
    prosperity: { type: Boolean, default: false },
    contribution: { type: Boolean, default: false },
    spirituality: { type: Boolean, default: false },
    day: { type: Date, default: Date.now },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('RitualDay', TodoSchema);