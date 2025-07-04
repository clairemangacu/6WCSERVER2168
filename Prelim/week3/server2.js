const http = require('http');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
    
const requestHandler = (req, res) => {
    if (req.url === '/') {
        eventEmitter.emit('homepage', res);
    } else {
        res.writeHead(404);
        res.end('Page Not Found');
    }
    };

    eventEmitter.on('homePage', (res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Hello, World!</h1>');
        res.end();
    });

    const server = http.createServer(requestHandler);

    server.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });
