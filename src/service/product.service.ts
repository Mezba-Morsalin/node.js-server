import path from "path";
import fs from "fs"
const filePath = path.join(process.cwd(), "./src/database/db.json")

export const productsServices = () => {
    const fsFile = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fsFile)
}