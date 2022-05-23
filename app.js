var button = document.querySelector('.btn');
var input = document.querySelector('.input');
var list = document.querySelector('.todos');




document.addEventListener('DOMContentLoaded',getTodos);
input.addEventListener('keydown', function(event){

    if (event.keyCode === 13) {
        event.preventDefault();
        addTodo();
    }
})


list.addEventListener('click',checkDelete);
button.addEventListener('click',addTodo);


function isEmpty(tag) {
    return list.innerHTML.trim() == ""
  }

function addTodo(){

    if(input.value==""){
        return
        
    }

    else{

       //Create todoDiv//

    var todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-container');


    //Create the Actual todo//

    var todo = document.createElement('li');
        todo.innerText=input.value;
        todo.classList.add('todo-item');
        todoDiv.appendChild(todo);


    //Add to local Storage//

    saveLocalTodo(input.value);


    //Create Done Button
        
    var doneBtn = document.createElement('button');
        doneBtn.classList.add('doneBtn');
        doneBtn.innerHTML= '<i class="fas fa-check"></i>';
        todoDiv.appendChild(doneBtn);


    
    //Create Delete Button
    var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerHTML= '<i class="fas fa-trash"></i>';
        todoDiv.appendChild(deleteBtn);

    //save to local storage//
    
    
    list.appendChild(todoDiv);

    input.value='';
  
}

}




function checkDelete(e){

    const item = e.target;
    if(item.classList[0]==='doneBtn'){
        item.parentElement.classList.toggle('task-done');
    }

    else if(item.classList[0]==='deleteBtn'){
        const todo = item.parentElement;
        todo.remove();
        removeLocalTodos(todo);

    }
}



function saveLocalTodo(todo){

    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    } else{
        todos=JSON.parse(localStorage.getItem("todos"));

    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));

}


function getTodos(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    } else{
        todos=JSON.parse(localStorage.getItem("todos"));

    }
    todos.forEach(function(task){


           //Create todoDiv//

    var todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-container');


    //Create the Actual todo//

    var todo = document.createElement('li');
        todo.innerText=task;
        todo.classList.add('todo-item');
        todoDiv.appendChild(todo);


    //Create Done Button
        
    var doneBtn = document.createElement('button');
        doneBtn.classList.add('doneBtn');
        doneBtn.innerHTML= '<i class="fas fa-check"></i>';
        todoDiv.appendChild(doneBtn);


    
    //Create Delete Button
    var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerHTML= '<i class="fas fa-trash"></i>';
        todoDiv.appendChild(deleteBtn);
    
    
    list.appendChild(todoDiv);

    })
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    } else{
        todos=JSON.parse(localStorage.getItem("todos"));

    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));

}

