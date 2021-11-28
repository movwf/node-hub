const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hey dudes!");
    res.end();
  })
  .listen(3003);
