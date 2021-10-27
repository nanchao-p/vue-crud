const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        task1: {
            type: String,
            require: 'task1 cannot be blank'
        },
        task2: {
            type: String,
            require: 'task2 cannot be blank'
        }
    },
    { collection: 'task' }
)

module.exports = mongoose.model('task', taskSchema)