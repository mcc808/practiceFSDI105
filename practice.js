let listTasks = [];

function Task(description,priority){
    this.title=description;
    this.priority=priority;
}

let inputPractice = document.getElementById('txtPractice');
let selectPriority = document.getElementById('selPriority');
let task="";

function register(){
    let newTask = new Task(inputPractice.value,selectPriority.value); 
    listTasks.push(newTask);
    display(newTask);
    inputPractice.value="";//clearing the input
    inputPractice.className="error";//adding the css class 
}

function display(aTask){
    let tasksSection = document.getElementById("tasks");//getting the HTML
    
    //task += "<p class='task'>" + inputPractice.value + "<p>";//create the task html element
    
    task+=`<li class="task">${aTask.title} --- ${aTask.priority}</li>`;
    tasksSection.innerHTML=task;//injecting the task into the HTML
}