# 📝 Todo CLI App

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Commander.js](https://img.shields.io/badge/Commander.js-FFD700?style=for-the-badge)](https://www.npmjs.com/package/commander)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A simple **command-line todo list application** built using **Node.js**.  
Add, remove, and view tasks directly from your terminal.  

---

## 🚀 Features

- ✅ Add new tasks  
- ❌ Remove tasks by index  
- 📋 View all tasks  
- 💾 Data is persistently saved in a local `todo.json` file  

---

## 🛠️ Tech Stack

- **Node.js**  
- **Commander.js**  
- **File System (fs)**  

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/aelshh/todo-cli-app.git
cd todo-cli-app
npm install
▶️ Usage
Run the following commands from your terminal:


# Add a new todo
node index.js add "Learn Git"

# List all todos
node index.js list

# Remove a todo by its index
node index.js remove 1
📁 Project Structure

todo-cli-app/
├── index.js           # CLI logic
├── todo.json          # Stores the todo data
├── package.json
└── .gitignore
🙋‍♂️ Author
Adarsh Chaudhary

⭐ Show Some Love!
If you found this useful or learned something new — give it a ⭐ on the repo!

"Code. Learn. Build. Repeat." ⚡
