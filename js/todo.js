const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input");
let toDos = [];


function paintTodo(newTodoObj){
    const newli = document.createElement("li");
    const newspan = document.createElement("span");
    const button = document.createElement("button");
    button.addEventListener("click", handleTodoButton);
    button.innerText = "❌";
    newspan.innerText = newTodoObj.text;
    newli.id = newTodoObj.id;
    newli.appendChild(newspan);
    newli.appendChild(button);
    todoList.appendChild(newli); 
};

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        id: Date.now(),
        text: newTodo,
    };
    toDos.push(newTodoObj); 
    paintTodo(newTodoObj);
    todoInput.value="";
    saveTodo();
}

function handleTodoButton(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveTodo();
    //const todoButton = document.querySelector("#todo-list button");
}

todoForm.addEventListener("submit", handleTodoSubmit);

const originalTodo = localStorage.getItem("todos");

if(originalTodo !== null){
    const parsedTodo = JSON.parse(originalTodo);
    toDos = parsedTodo;
    parsedTodo.forEach(element => {
        paintTodo(element);
    });
}

