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
      ws.send(message);
    },
  },
  port: 3000,
});
