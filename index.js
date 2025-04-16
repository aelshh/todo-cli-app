const { Command } = require("commander");
const program = new Command();
const fs = require("fs");
const todoList = require("./todo");
const { json } = require("stream/consumers");

program
  .name("todo-list-maker")
  .description("CLI to some JavaScript file operations")
  .version("0.8.0");

program
  .command("read-todo")
  .description("Manages the todo list of a user")
  .action(() => {
    fs.readFile("todo.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        let displaytodos = JSON.parse(data);

        displaytodos["todo"].forEach((element, index) => {
          console.log(`${index + 1}. ${element}`);
        });
      }
    });
  });

program
  .command("add-todo")
  .description("Manages the todo list of a user")
  .argument("<string>", "The todo that is to be added")
  .action((str) => {
    fs.readFile("todo.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        const displaytodos = JSON.parse(data);

        displaytodos["todo"].push(str);

        fs.writeFile("todo.json", JSON.stringify(displaytodos), (err) => {
          if (err) {
            throw err;
          }
        });
        displaytodos["todo"].forEach((element, index) => {
          console.log(`${index + 1}. ${element}`);
        });
      }
    });
  });

program
  .command("delete-todo")
  .description("Manages the todo list of a user")
  .argument("<string>", "The todo that is to be deleted")
  .action((str) => {
    fs.readFile("todo.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        const displaytodos = JSON.parse(data);

        if (displaytodos.todo.includes(str)) {
          const removingIndex = displaytodos["todo"].indexOf(str);
          displaytodos["todo"].splice(removingIndex, 1);
          displaytodos["todo"].forEach((element, index) => {
            console.log(`${index + 1}. ${element}`);
          });

          fs.writeFile("todo.json", JSON.stringify(displaytodos), (err) => {
            if (err) {
              throw err;
            }
          });
        } else {
          console.log("No such todo exists");
        }
      }
    });
  });

program
  .command("update-todo")
  .description("Manages the todo list of a user")
  .argument("<string>", "The todo that is to be updated")
  .argument("<string>", "Updated value of todo")
  .action((existingTodo, updatedTodo) => {
    fs.readFile("todo.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        const displaytodos = JSON.parse(data);

        if (displaytodos.todo.includes(existingTodo)) {
          let indexOfExitingTodo = displaytodos.todo.indexOf(existingTodo);
          displaytodos.todo[indexOfExitingTodo] = updatedTodo;
        } else {
          console.log("No such todo exists");
        }

        fs.writeFile("todo.json", JSON.stringify(displaytodos), (err) => {
          if (err) {
            throw err;
          }
        });
        displaytodos["todo"].forEach((element, index) => {
          console.log(`${index + 1}. ${element}`);
        });
      }
    });
  });

program.parse();
