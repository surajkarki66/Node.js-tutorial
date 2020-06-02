const TaskModel = require('../models/tasks');

const createTask = (req, res) => {
    const task = new TaskModel({
        title: req.body.title,
        assignee: req.body.assignee
    });

    task.save().then(() => {
        res.status(200).json({ message: 'Task Created'});
    }).catch((err) => {
        res.status(500).json({ message: err});
    });
   
};

const getTask = (req, res) => {
    TaskModel.find({_id: req.params.id}, (err, doc) => {
        if (!err) {
            res.status(200).json(doc);
        }
        else {
            res.status(500).json({message: err});
        }
    });
};

const listTask = (req, res) => {
    TaskModel.find((err, docs) => {
        if (!err) {
            res.status(200).json(docs);
        }
        else {
            res.status(500).json({message: err});
        }
    });
};

// For updation there always required asynchronous call
const updateTask = async (req, res) => {
    const taskUpdate = await TaskModel.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            title: req.body.title,
            assignee: req.body.assignee
        }
    },
    {new: true});

    if(taskUpdate) {
        res.status(200).json({message: 'Successfully updated'});
    } else {
        res.status(200).json({message: 'Could not update'});
    }
};

// For Deletion there always required asynchronous call
const deleteTask = async (req, res) => {
    const taskDelete = await TaskModel.findOneAndDelete({_id: req.params.id});
    if (taskDelete) {
        res.status(200).json({message: 'Successfully deleted'});
    } else {
        res.status(200).json({message: 'Could not deleted'});
    }
};

module.exports = {createTask, getTask, listTask, updateTask, deleteTask};