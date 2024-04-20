const divAddInput = document.querySelector("#todoAdd");
const addInputButton = document.querySelector("#todoAddButton");
const addInput = document.querySelectorAll(".form-control")[0];
const todoList = document.querySelector(".list-group");
const cardBody = document.querySelector(".card-body");
const searchButton = document.querySelector("#todoSearchButton");
const searchInput = document.querySelectorAll(".form-control")[1];
const clearButton = document.querySelector("#clearButton");
const alertArea = document.querySelector("#alert");
const removeButton = document.querySelector(".fa-remove");

let todos = [];

run();

function run() {
    document.addEventListener("DOMContentLoaded",pageLoaded);
    addInputButton.addEventListener("click",addTodo);
    cardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", allRemoveTodos);
    searchButton.addEventListener("click", searchTodo);
}

addInput.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      addTodo(e);
    }
  });

searchInput.addEventListener("keypress", function (e) {
if (e.key == "Enter") {
    searchTodo(e);
}
});

function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach(function(todo) {
        addTodoToUI(todo);
    })
}

function searchTodo(e) {
    const searchValue = e.target.value.toLowerCase().trim();
    const todoEach = document.querySelectorAll(".list-group-item");

    if (todoEach.length > 0) {
        todoEach.forEach(function(todo) {
            if (todo.textContent.toLowerCase().trim().includes(searchValue)) {
                todo.setAttribute("style","display : block");
            } else {
                todo.setAttribute("style","display : none !important");
            }
        })
    } else {
        showAlert("warning", "Filtreleme yapmak için en az bir todo olmalıdır!");
    }
    searchInput.value = "";
}

function allRemoveTodos() {
    const todoEach = document.querySelectorAll(".list-group-item");
    if (todoEach.length > 0) {
        todoEach.forEach(function(todo) {
            todo.remove();
        })

        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Başarılı bir başarıyla silindi"); 
    }
    else {
        showAlert("warning","Silmek için en az bir todo olmalıdır!");
    }
}


function removeTodoToUI(e) {
    if (e.target.className === "btn btn-light btn-sm delete-item") {
        const todo = e.target.parentElement;
        todo.remove();

        removeTodoToStorage(todo.textContent);
        showAlert("success", "Todo başarıyla silindi");
    }
}

function removeTodoToStorage(removeTodo) {
    checkTodosFromStorage();
    todos.forEach(function(todo, index) {
        if (removeTodo === todo) {
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("warning", "Todo eklemek için bir deger girmelisiniz");
    } else {
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("success", "Todo eklendi");
    }
    e.preventDefault();
}

function addTodoToUI(newTodo) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "btn btn-light btn-sm delete-item";

    const i = document.createElement("span");
    i.className = "glyphicon glyphicon-trash";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type, message) {
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    alertArea.appendChild(div);
    setTimeout(function() {
        div.remove();
    }, 2000);
}
