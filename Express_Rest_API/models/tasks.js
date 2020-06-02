const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    assignee: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: false
    }
});


module.exports = mongoose.model('Task', TaskSchema); // converting schema to model