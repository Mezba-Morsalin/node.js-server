import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import routHandler from "./routes/route";
import config from "./config";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routHandler(req, res);
  },
);

const PORT = config.port

server.listen(PORT, () => {
  console.log(`Node Server Running Successfully ${PORT}`);
});
