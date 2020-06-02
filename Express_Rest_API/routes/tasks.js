const express = require('express');

const taskController = require('../controllers/tasks');

// Router initialization
const router = express.Router();

// CRUD

// Create (POST)
router.post('/createTask',taskController.createTask);

// List (GET)
router.get('/listTask', taskController.listTask);

// Read (GET)
router.get('/getTask/:id', taskController.getTask);

// Update 
router.patch('/updateTask/:id', taskController.updateTask);

// Delete
router.delete('/deleteTask/:id', taskController.deleteTask);

module.exports = router;