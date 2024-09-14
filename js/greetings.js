const loginForm  = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const todo = document.getElementById("todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(info) {
    info.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(userName);
}

function paintGreetings(userName) {
    const date = new Date();
    const hours = date.getHours();
    if(hours > 3 && hours < 12)
        greeting.innerText = "Good morning, " + userName+"!";
    else if(hours < 19)
        greeting.innerText = "Good afternoon, " + userName+"!";
    else
        greeting.innerText = "Good evening, " + userName+"!";
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todo.classList.remove("hidden");
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit)
} else {
    paintGreetings(savedUserName);
}