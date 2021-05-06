const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    completed: {
        type: Boolean,
        default: false
    },
    /*project: {
        type: String,
        required: true, ['Please add a positive or negative number']
    },*/
    createdAt: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
        default: null
    },
    /*user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }*/
});

module.exports = mongoose.model('Task', TaskSchema);