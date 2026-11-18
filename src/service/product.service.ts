import path from "path";
import fs from "fs"
import type { Type } from "../types/type";
const filePath = path.join(process.cwd(), "./src/database/db.json")

export const productsServices = () => {
    const fsFile = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fsFile)
}

export const createProducts = (payload : Type []) => {
    fs.writeFileSync(filePath, JSON.stringify(payload))
}