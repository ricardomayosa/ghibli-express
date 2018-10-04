const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const request = new XMLHttpRequest();
const Request = require("request");

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/movies', (req, res, next) => {
    //request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
    Request.get("https://ghibliapi.herokuapp.com/films", (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        var movies = JSON.parse(body);
        res.render('movies', {movies});
        //console.log(data[0].title);
    });
    
});


app.listen(3000);