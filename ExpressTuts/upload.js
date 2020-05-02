const express = require('express');
const app = express();
const fs = require('fs');

const bodyParser = require('body-parser');
const multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}));

app.get('/upload.html', (req, res)=> {
    res.sendFile(__dirname + "/" + "upload.html");
})

app.post('/file_upload', (req, res)=> {
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
    const file = __dirname + "/" + req.files.file.name;

    fs.readFile( req.files.file.path,  (err, data)=> {
    fs.writeFile(file, data, (err) => {

    if( err ){
    console.log( err );
    }else{
    response = {
    message:'File uploaded successfully',
    filename:req.files.file.name
    };
    }
    console.log( response );
    res.end( JSON.stringify( response ) );
    });
    });
})

const server = app.listen(3000, ()=> {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log(`Listening on http://localhost:${port}`);
})

