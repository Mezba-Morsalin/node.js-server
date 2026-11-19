import type { IncomingMessage, ServerResponse } from "http";
import {  createProducts, productsServices } from "../service/product.service";
import type { Type } from "../types/type";
import { bodyParser } from "../utils/parseBody";
import { sendResponse } from "../utils/sendResponse";




const productController = async (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  const urlParams = url?.split("/")

  const id = urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null


  if (url === "/products" && method === "GET") {

    try {
        const products = productsServices()
      sendResponse(res, true, 200, "This is Product Root Route", products)
    } catch (error) {
      sendResponse(res, false, 404, "Internal Server Error")
    }
  } 

   else if (method === "GET" && id !== null) {
    try {
      const products = productsServices()

    const product = products.find((p : Type) => p.id === id)

    if (!product) {
     return sendResponse(res, false, 404, "Product Not Found")
    }

    sendResponse(res, true, 200, "This is Product Root Route", product)
    } catch (error) {
      sendResponse(res, false, 404, "Internal Server Error")
    }
   }

   else if (method === "POST" && url === "/products") {
    try {
      const body = await bodyParser(req);

    const newProduct = {
      id : Date.now(),
      ...body
    }

    const products = productsServices()

    products.push(newProduct);

    createProducts(products)

    sendResponse(res, true, 200, "Product Created Successfully", newProduct)
    } catch (error) {
      sendResponse(res, false, 404, "Internal Server Error")
    }
   }

   else if (method === "PUT" && id !== null) {
    try {
      const body = await bodyParser(req);
    const products = productsServices();

    const index = products.findIndex((p :Type) => p.id === id)

    if (index < 0 ) {
      sendResponse(res, false, 404, "Failed to Update Product")
    }

    products[index] = {
      id : products[index].id,
      ...body
    }


    createProducts(products)

    sendResponse(res, true, 200, "Product Created Successfully", products[index])
    } catch (error) {
      sendResponse(res, false, 404, "Internal Server Error")
    }
   }

   else if (method === "DELETE" && id !== null) {
    try {
      const products = productsServices();
    const index = products.findIndex((p :Type) => p.id === id)

    if (index < 0 ) {
      sendResponse(res, false, 404, "Product Not Found")
    }

    products.splice(index, 1)

    createProducts(products)

    sendResponse(res, true, 200, "Product Deleted Successfully")
    } catch (error) {
      sendResponse(res, false, 404, "Internal Server Error")
    }
   }
  else {
    sendResponse(res, false, 404, "Root Not Found")
  }
};

export default productController;
