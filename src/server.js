import http from "node:http";
import { hello } from "./hello.js";

const port = Number(process.env.PORT || 3000);
http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  response.end(hello("Docker"));
}).listen(port, () => console.log(`Servidor na porta ${port}`));
