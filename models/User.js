const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const RitualDaySchema = new mongoose.Schema({
    name: {type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid']},
    password: type: String,
    createdAt: { type: Date, default: Date.now },
    email: {
        type: String,
        unique: true,
        index: true,
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
});

//bcrypt

module.exports = mongoose.model('RitualDay', TodoSchema);