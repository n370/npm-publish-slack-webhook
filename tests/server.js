const http = require('http');

http.createServer((req, res) => {
    req.pipe(res);
}).listen(1337, () => {
    console.log('Server listening on http://localhost:1337/\n\n');
});
