var http = require('http');

var hostname = 'localhost';
var port = 5000;

var servertask1 = http.createServer((req, res) => {
    // console.log(req,headers)ç
    if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><p><b>Home Page.</b></p></body></html>");
    } else if (req.url == "/about") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<html><body><p><b>About Page.</b></p></body></html>");
    } else if (req.url == "/contact") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<html><body><p><b>Contact Page.</b></p></body></html>");
    }
})

servertask1.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
 });