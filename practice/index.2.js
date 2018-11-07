const title = document.getElementById('title')
const title = document.querySelector('#title')
title.innerHTML = "Hello from JS!"
title.style.color = "darkred"
console.dir(title)

document.title = "pak"

function handleResize(event){
    console.log("resize resize resizzze!");
    console.log(event);
}


const title = document.querySelector('#title')
window.addEventListener("submitt")
window.addEventListener("resize", handleResize(event))

function handleClick(){
    title.style.color = "red";
}

title.addEventListener("click", handleClick)