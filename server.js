// server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        // Echo the message back to all clients
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(JSON.parse(message)));
            }
        });
    });

    // ws.send(JSON.stringify({"message":"Welcome! WebSocket server is connected."}));
});