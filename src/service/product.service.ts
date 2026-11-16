import path from "path";

const filePath = path.join(process.cwd(), "./src/database/db.json")

export const productsServices = () => {
    console.log(filePath);
}