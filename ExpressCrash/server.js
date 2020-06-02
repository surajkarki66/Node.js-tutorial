const express = require('express');

const app = express();

/*************** Middleware ****************************/

// Body parser middleware -> allows us to handle raw json.
app.use(express.json());

// Form handler middleware
app.use(express.urlencoded({ extended: false }));

/********************* Routes *********************/

app.get("/", (req, res) => {
    res.send("<h1>Welcome to my channel :) </h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1> I am a Software Engineer. <h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>My phone number is 98071129389.</h1>");
});

app.get("/calculator", (req, res) => {
    //console.log(__dirname);
    res.sendFile(__dirname +  '/index.html');
});


app.post("/calculator", (req, res) => {
    var num1 = req.body.v1;
    var num2 = req.body.v2;
    var operation = req.body.op;
    var result = null;

    switch(operation) {
        case '+':
            result = num1 + num2;
            res.send(`<h1> ${num1} ${operation} ${num2} = ${result}`);
            break;
        
        case '-':
            result = num1 - num2;
            res.send(`<h1> ${num1} ${operation} ${num2} = ${result}`);
            break;
    
        case '*':
            result = num1 * num2;
            res.send(`<h1> ${num1} ${operation} ${num2} = ${result}`);
            break;

        case '/':
            result = num1 / num2;
            res.send(`<h1> ${num1} ${operation} ${num2} = ${result}`);
            break;

        default:
            res.send("<h1> This is not valid operation </h1>");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => console.log(`Server started on port ${PORT}`));