const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// For serving static files
app.use(express.static('public'));  
//console.log(app)

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({extended: false});


// Get in index.html
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
})

app.post('/process_post', urlencodedParser, (req, res)=> {
    // In JSON
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

/*
app.get('/process_get', (req, res) => {
    // Prepare output in JSON format
    response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
*/

// GET request
app.get('/', (req, res) => {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})

// POST request
app.post('/', (req, res)=> {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

// DELETE request
app.delete('/del_user', (req, res)=> {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})

//GET
app.get('/list_user', (req, res)=> {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})



const server = app.listen(8080, ()=> {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log(`Listening on http://localhost:${port}`);
})