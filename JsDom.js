let button = document.getElementById("button-addon1");
// let button2 = document.getElementById("button-addon2")
let button3 = document.getElementById("button-addon3");
let button4 = document.getElementById("button-addon4");
let toDo1 = document.getElementById("todo1");
let toDo2 = document.getElementById("todo2");
let toDo3 = document.getElementById("todo3");
let toDo4 = document.getElementById("todo4");
let p = document.querySelector("p");

let todos = [toDo1, toDo2, toDo3, toDo4];

let findInput = document.querySelector("#input1");
let findInput2 = document.querySelector("#input2");

function addTask(e) {
  for (let i = 0; i < todos.length; i++) {
    if (!todos[i].value) {
      todos[i].value = findInput.value;
      console.log(
        "Yapılan event işlemi: " +
          e.type +
          "\n" +
          "Event işleminin çalıştığı id: " +
          e.target.id
      );
      break;
    }
  }
  findInput.value = "";
}

// button.onclick = addTask;
button.addEventListener("click", addTask);

findInput.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    addTask(e);
  }
});

function findTask(e) {
  for (let i = 0; i < todos.length; i++) {
    if (
      findInput2.value.toUpperCase() == todos[i].value.toUpperCase() &&
      todos[i].value != ""
    ) {
      p.innerText =
        "Task " +
        "'" +
        todos[i].value +
        "'" +
        " in " +
        todos[i].getAttribute("placeholder") +
        " line";
      console.log(
        "Yapılan event işlem: " +
          e.type +
          "\n" +
          "Event işleminin çalıştığı id: " +
          e.target.id
      );
      break;
    } else {
      p.innerText = "Not found";
    }
  }
  findInput2.value = "";
}

button3.onclick = findTask;
findInput2.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    findTask(e);
    // button3.onclick = findTask;
  }
});

function clearAll(e) {
  for (let i = 0; i < todos.length; i++) {
    todos[i].value = "";
    p.innerText = "";
    findInput2.value = "";
    console.log(
      "Yapılan event işlemi: " +
        e.type +
        "\n" +
        "Event işleminin çalıştığı id: " +
        e.target.id
    );
  }
}

button4.onclick = clearAll;

// let example = document.querySelectorAll("div")[1].querySelectorAll("input")[0].placeholder
// console.log(example)

// let example = document.querySelectorAll("div:first-child")

// console.log(example)

// let example = document.querySelector("#todo3")
// example.style.fontSize = "50px";

// console.log(example)

// let example = document.querySelector(".input-group-default")
// let classChild = Array.from(example.children)

// classChild.forEach(element => {
//     console.log(element.getAttribute("id"))
// })

// let link = document.createElement("a")
// link.innerText = "Taha"
// link.id = "a1"
// link.href = "https://www.google.com"
// link.className = "display-1 text-primary text-decoration-none"
// link.style = "font-size: 25px; padding-left: 250px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;";
// document.body.appendChild(link);

let newBtnAdd = document.querySelectorAll("div")[1].children[3];

// let newBtn = document.createElement("button");
// newBtn.className = "btn btn-outline-secondary text-primary";
// newBtn.innerText = "Google";
// newBtnAdd.appendChild(newBtn)

let addATag = document.createElement("a");
addATag.href = "https://www.google.com";
addATag.innerText = "Google";
addATag.className = "btn btn-outline-warning text-warning text-decoration-none";
newBtnAdd.appendChild(addATag);

// addATag.remove();

// let buttonS = document.querySelectorAll(".btn-outline-secondary")
// newBtnAdd.removeChild(buttonS[3])

// let addPTag = document.createElement("p");
// addPTag.className = "display-6 text-secondary";
// addPTag.innerText = "Taha";

// newBtnAdd.replaceChild(addPTag, newBtnAdd.childNodes[5])

// console.log(newBtnAdd.childNodes)

let addExam = document.createElement("button");
addExam.className = "btn btn-outline-warning text-warning";
addExam.innerText = "Exam";
addExam.id = "addExam";
newBtnAdd.appendChild(addExam);

function addExamFunc(e) {
  console.log(e.target.id);
}

addExam.addEventListener("click", addExamFunc);

let darkModeBtn = document.querySelector("#darkModeBtn");
let lightModeBtn = document.querySelector("#lightModeBtn");

function darkModefunc() {
  // document.body.classList.remove("bg-light");
  document.body.classList.toggle("bg-dark");
  if (darkModeBtn.innerText == "Dark Mode") {
    darkModeBtn.innerText = "Light Mode";
  } else {
    darkModeBtn.innerText = "Dark Mode";
  }
  findInput.classList.toggle("bg-warning");
  findInput.classList.toggle("text-black");
  findInput2.classList.toggle("bg-warning");
  findInput2.classList.toggle("text-black");
  for (let i = 0; i < todos.length; i++) {
    todos[i].classList.toggle("bg-warning");
    todos[i].classList.toggle("text-black");
  }
}

// function lightModefunc() {
//   document.body.classList.remove("bg-dark");
//   // document.body.classList.add("bg-light");
// }

darkModeBtn.addEventListener("click", darkModefunc);
// lightModeBtn.addEventListener("click", lightModefunc)

function mousetextOnDark() {
  darkModeBtn.classList.remove("text-warning");
  darkModeBtn.classList.add("text-secondary");
}

function mousetextOffDark() {
  darkModeBtn.classList.remove("text-secondary");
  darkModeBtn.classList.add("text-warning");
}

darkModeBtn.addEventListener("mouseover", mousetextOnDark);
darkModeBtn.addEventListener("mouseout", mousetextOffDark);

function mousetextOnFind() {
  button3.classList.remove("text-warning");
  button3.classList.add("text-secondary");
}

function mousetextOffFind() {
  button3.classList.remove("text-secondary");
  button3.classList.add("text-warning");
}

button3.addEventListener("mouseover", mousetextOnFind);
button3.addEventListener("mouseout", mousetextOffFind);

function mouseTextOnClear() {
  button4.classList.remove("text-warning");
  button4.classList.add("text-secondary");
}

function mouseTextOffClear() {
  button4.classList.remove("text-secondary");
  button4.classList.add("text-warning");
}

button4.addEventListener("mouseover", mouseTextOnClear);
button4.addEventListener("mouseout", mouseTextOffClear);

function mouseTextOnAdd() {
  addATag.classList.remove("text-warning");
  addATag.classList.add("text-secondary");
}

function mouseTextOffAdd() {
  addATag.classList.remove("text-secondary");
  addATag.classList.add("text-warning");
}

addATag.addEventListener("mouseover", mouseTextOnAdd);
addATag.addEventListener("mouseout", mouseTextOffAdd);

function mouseTextOnAddExam() {
  addExam.classList.remove("text-warning");
  addExam.classList.add("text-secondary");
}

function mouseTextOffAddExam() {
  addExam.classList.remove("text-secondary");
  addExam.classList.add("text-warning");
}

addExam.addEventListener("mouseover", mouseTextOnAddExam);
addExam.addEventListener("mouseout", mouseTextOffAddExam);

function mouseTextOnAddTask() {
  button.classList.remove("text-warning");
  button.classList.add("text-secondary");
}

function mouseTextOffAddTask() {
  button.classList.remove("text-secondary");
  button.classList.add("text-warning");
}

button.addEventListener("mouseover", mouseTextOnAddTask);
button.addEventListener("mouseout", mouseTextOffAddTask);
