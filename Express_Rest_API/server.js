const express = require('express');
const app = express();
const mongoose = require('mongoose');

const tasksRoutes = require('./routes/tasks');

// Middleware
app.use(express.json());
app.use('/api/tasks',tasksRoutes);

// Mongodb server connection
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false/tasks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}, (err) => {
    if (!err) {
        // Server configuration
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } else {
        console.log("Error");
    }
});
