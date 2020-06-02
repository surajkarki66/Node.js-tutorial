const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const logger = require('./middleware/logger');
const members = require('./Members');
const app = express();

/*********************** Middleware ***********************************/

// init middleware
app.use(logger);

// Body parser middleware -> allows us to handle raw json.
app.use(express.json());

// Form handler middleware
app.use(express.urlencoded({ extended: false }));

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



/*********************** Routes ***********************************/

// Homepage Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Member App',
        members
    });
});

// Members api routes
app.use('/api/members', require('./routes/api/members'));

// GET 
app.get('/', (req, res) => {
    res.send('<h1> Hello World!!! <h1>');
    //res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


/*********************** Statics ***********************************/

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));  // __dirname-> current directory


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
