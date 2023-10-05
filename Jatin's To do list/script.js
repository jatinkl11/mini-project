"use strict";
//selectors
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");
const filterOption = document.querySelector(".filterTodo");

//event listners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo); //add new task to the list when button is
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodos);

//functions
function addTodo(event) {
  event.preventDefault(); //prevent form for submitting when clicked on button

  //ToDo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todoItem");
  todoDiv.appendChild(newTodo);

  //add to-do to local storage
  saveLocalTodos(todoInput.value);

  //completed button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="ph-bold ph-check"></i>';
  completedButton.classList.add("completeButton");
  todoDiv.appendChild(completedButton);

  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="ph-fill ph-trash"></i>';
  deleteButton.classList.add("deleteButton");
  todoDiv.appendChild(deleteButton);

  //append to list
  todoList.appendChild(todoDiv);

  //clear the input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  //delete the todo
  if (item.classList[0] === "deleteButton") {
    const todo = item.parentElement;

    //animation
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //checkmark
  if (item.classList[0] === "completeButton") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodos(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

//saveTodos to local storage
function saveLocalTodos(todo) {
  //check already available todo's
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  //check already available todo's
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    //ToDo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todoItem");
    todoDiv.appendChild(newTodo);

    //completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="ph-bold ph-check"></i>';
    completedButton.classList.add("completeButton");
    todoDiv.appendChild(completedButton);

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="ph-fill ph-trash"></i>';
    deleteButton.classList.add("deleteButton");
    todoDiv.appendChild(deleteButton);

    //append to list
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos (todo) {
    let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice((todos.todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}