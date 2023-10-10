console.log("Starting server...");
Bun.serve({
  fetch(req, server) {
    const success = server.upgrade(req);
    if (success) {
      return undefined;
    }
    return new Response("Hello world!");
  },
  websocket: {
    open(ws) {
      ws.send("connected!");
    },
    message(ws, message) {
      console.log("echoing %s", message);
      ws.send(message);
    },
    close(ws) {
      console.log("Client has disconnected.");
    },
  },
  port: 3000,
});
