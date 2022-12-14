const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function onSubmit(info){
    info.preventDefault();
    const username = loginInput.value;
    
    if (username === ""){
        alert("Please Write Your Name.");
    }else if(username.length>15){
        alert("Your Name Is Too Long");
    }else{
        console.log("hello", username);
    }

    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem("username", username);
    greetUser();
}

function greetUser(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${username}`;
}


function handleLinkClick(event){
    console.log(event);
    event.preventDefault();
}

link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername ===  null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onSubmit);
}
else{
    greetUser();
    loginForm.classList.add(HIDDEN_CLASS);
}