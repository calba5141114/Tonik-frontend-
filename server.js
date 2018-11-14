const http = require('http');

http.createServer(() => {
    res.end('Word');
});

server.listen(process.env.PORT || 3000);