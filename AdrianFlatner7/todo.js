let tasks = [];
let counter = document.getElementById("counter");

document.getElementById("form").onsubmit = function addTask(event){
    event.preventDefault();
    let li = document.createElement("li");
    let inputText = document.getElementById("inputT");
    let inputValue = inputText.value;
    let label = document.createElement("label");
    let checkbox = document.createElement("input");
    let newTask = new Object();

    checkbox.onclick = updateCounter;
    label.innerText = inputValue;
    checkbox.type = "checkbox";

    li.appendChild(checkbox);
    li.appendChild(label);
    document.getElementById("newUL").insertBefore(li, document.getElementById("newUL").firstChild);

    newTask.text = inputValue;
    newTask.date = new Date();
    tasks.push(newTask);

    //Empies the input textbox
    document.getElementById("inputT").value = "";

    console.log(tasks);
    inputText.focus();
    updateCounter();
}

function updateCounter(){
    let checked = document.querySelectorAll("input[type=checkbox]:checked");
    counter.innerHTML = "Completed: " + checked.length + "/" + tasks.length;
}