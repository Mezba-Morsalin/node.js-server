import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server : Server = createServer((req : IncomingMessage , res : ServerResponse ) => {
    const url = req.url
    const method = req.method

    if (url ===  "/" && method === "GET") {
        res.writeHead(200, {"Content-type" : "application/json"})
        res.end(JSON.stringify({message :"This is Root Route"}))
    }
    else if (url?.startsWith("/product")) {
        res.writeHead(200, {"Content-type" : "application/json"})
        res.end(JSON.stringify({message :"This is Product Root Route"}))
    }
    else {
        res.writeHead(404, {"Content-type" : "application/json"})
        res.end(JSON.stringify({message :"This is Not Root Route"}))
    }
});

server.listen(5000, () =>{
    console.log("Node Server Running Successfully");
})
