let toDoList = [];
function addToDo(){
    let inputElement = document.querySelector('#todo_input');
    let dueDate = document.querySelector('#todo_date');
    let toDoItem = inputElement.value;
    let toDoDate = dueDate.value;
    toDoList.push({item: toDoItem, date: toDoDate});
    inputElement.value = '';
    dueDate.value = '';
    displayToDo();
}

function displayToDo(){
    let toDoContainer = document.querySelector('#toDo_container');
    let newHtml = '';
    for(let i=toDoList.length-1; i>=0; i--){
        let {item, date} = toDoList[i];
        newHtml += `<span> ${item} </span> <span> ${date} </span> <button class="todo_delete" onclick="toDoList.splice(${i}, 1); displayToDo();">
        Delete</button> `;
    }
    toDoContainer.innerHTML = newHtml;
}