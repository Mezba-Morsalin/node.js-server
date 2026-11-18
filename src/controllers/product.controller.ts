import type { IncomingMessage, ServerResponse } from "http";
import { productsServices } from "../service/product.service";
import type { Type } from "../types/type";



const productController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  const urlParams = url?.split("/")

  const id = urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null


  if (url === "/products" && method === "GET") {

    const products = productsServices()

    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({ message: "This is Product Root Route", data: products }),
    );
  } 
   else if (method === "GET" && id !== null) {
    const products = productsServices()

    const product = products.find((p : Type) => p.id === id)

    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({ message: "This is Product Root Route", data: product }),
    );
   }
  
  else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(JSON.stringify({ message: "This is Not Root Route" }));
  }
};

export default productController;
