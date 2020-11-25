const task3Element = document.getElementById('task-3');

let name = "John"
let greet = "Hi"
let goodDay = "Have a great day"

function funOne(){
    alert("Hello There!!!!");
}

function funTwo(){
    alert("Hello "+name);
}

funOne();
funTwo(name);

function funThree(){
    alert(greet +" "+ name+ " "+ goodDay)
}

funThree(name, greet, goodDay);

task3Element.addEventListener('click', funOne);