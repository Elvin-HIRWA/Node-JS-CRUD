const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // const num = _.random(10,15);
    // console.log(num);

    // const greet = () => {
    //     console.log('hello');
        
    // };

    // greet();
    // greet();
    
    res.setHeader('content-Type', 'text/html');

    let path = './Views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('location','/about');
            res.end();

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log('done');
});