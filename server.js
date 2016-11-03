const app = require('./lib/app');
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, err => {
    if (err) {console.log(`Err: ${err}`);}
    else {console.log(`Server is listening on port ${port}`);}
});