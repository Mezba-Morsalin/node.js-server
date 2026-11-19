# Node.js TypeScript Server

A backend server built with **Node.js and TypeScript**, focusing on structured code organization, modular architecture, and handling HTTP requests and responses.

## 🚀 Overview

This project demonstrates how to build a backend server using Node.js and TypeScript without relying on a backend framework. It follows a modular structure to keep the code organized, maintainable, and scalable.

## 🛠️ Technologies Used

- Node.js
- TypeScript
- Native HTTP Module
- JSON Database
- dotenv
- Postman

## 📁 Project Structure

```text
Module-06/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   │   └── db.json
│   ├── routes/
│   ├── service/
│   ├── types/
│   ├── utils/
│   │   ├── parseBody.ts
│   │   └── sendResponse.ts
│   └── server.ts
├── .gitignore
├── package.json
├── tsconfig.json
```

## ✨ Key Concepts

- Creating an HTTP server using Node.js.
- Handling incoming HTTP requests and server responses.
- Organizing code with a modular architecture.
- Separating Routes, Controllers, and Services.
- Parsing request bodies.
- Creating reusable response utilities.
- Using TypeScript for type safety.
- Working with JSON-based data storage.
- Managing environment variables.

## ⚙️ Installation & Setup

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd Module-06
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file and add the required environment variables.

**5. Run the project**

Use the development script configured in `package.json`.

## 🎯 Learning Goals

The main goal of this project is to strengthen my backend development fundamentals by understanding how Node.js handles HTTP requests, how backend applications are structured, and how different layers communicate with each other.

---

**Author:** Mezba Morsalin  
**Role:** Frontend Developer | Learning Backend Development