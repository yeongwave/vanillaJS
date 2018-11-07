const form = document.querySelector(".js-form");
    input = form.querySelector("input");
    greeting = document.querySelector(".js-greeting");
const USER_LS = "currentUser";
    SHOWING_ON = "showing";

function paintGreeting (text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add('SHOWING_ON');
    greeting.innerTEXT = `Hello, ${text}`;
}

function loadName () {
    const currentUser = localStorage.getItem();
    if (currentUser === null) {

    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();