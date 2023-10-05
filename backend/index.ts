console.log("Server is running...");
Bun.serve({
  port: 3000,
  fetch(request, server) {
    return new Response("hello world");
  },
});
