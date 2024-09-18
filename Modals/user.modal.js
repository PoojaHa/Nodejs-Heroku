// models/TaskModel.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: false
    },
    role:{
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true  
    },
    activity:[{
        type: mongoose.Types.ObjectId,
        ref: 'Task'
    }]
}, {timeseries:true});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
