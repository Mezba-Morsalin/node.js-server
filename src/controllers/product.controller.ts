import type { IncomingMessage, ServerResponse } from "http";
import { productsServices } from "../service/product.service";


const productController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  if (url === "/products" && method === "GET") {

    const products = productsServices()

    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({ message: "This is Product Root Route", data: products }),
    );
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(JSON.stringify({ message: "This is Not Root Route" }));
  }
};

export default productController;
