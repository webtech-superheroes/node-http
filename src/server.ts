import http from 'http';

const messages: string[] = []; // Store messages in memory for this example

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const { method, url } = req;

    // Handle GET request to /messages
    if (method === 'GET' && url === '/messages') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ messages }));
        return;
    }

    // Handle POST request to /messages
    if (method === 'POST' && url === '/messages') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // Convert Buffer to string
        });
        req.on('end', () => {
            try {
                const { message } = JSON.parse(body);
                if (!message) {
                    throw new Error('No message provided');
                }
                messages.push(message); // Add the message to the array

                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: 'Message received' }));
            } catch (e) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Invalid request' }));
            }
        });
        return;
    }

    // Handle other routes
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
});

export default server;