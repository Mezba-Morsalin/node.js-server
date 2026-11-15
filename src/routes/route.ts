import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/product.controller";

const routHandler = (req : IncomingMessage ,res : ServerResponse) => {
    const url = req.url
    const method = req.method

    if (url ===  "/" && method === "GET") {
        res.writeHead(200, {"Content-type" : "application/json"})
        res.end(JSON.stringify({message :"This is Root Route"}))
    }
    else if (url?.startsWith("/product")) {
        productController(req, res)
    }
    else {
        res.writeHead(404, {"Content-type" : "application/json"})
        res.end(JSON.stringify({message :"This is Not Root Route"}))
    }
}

export default routHandler