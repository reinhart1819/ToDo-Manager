let newTask= document.getElementById("txtTask");
let count = 0;
function registerTask() {
    // get info from input

    // display info on console--- then on a html element
    console.log(newTask.value);
    let tmp= `<li id="${count}" class="task">${newTask.value} <button onclick="deleteTask(${count})">🗑️
    </button></li>`;
    document.getElementById("todoList").innerHTML+=tmp;
    clearForm();
    count++
}


function deleteTask(x) {
    document.getElementById(x).remove()

}

function clearForm() {
    newTask.value="";
}