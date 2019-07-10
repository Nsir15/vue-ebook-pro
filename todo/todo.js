
var log = function(){
    console.log.apply(console,arguments);
}

var querySelector = function(selector){
    return document.querySelector(selector);
}

var addButton = querySelector('#id-button-add');
addButton.addEventListener('click',function(){

    var todoInput = querySelector('#id-input-todo');
    var todoContent = todoInput.value;
    var date = getTime();
    if(!todoContent.length){
        alert('请输入内容');
        return;
    }
    //添加到container中
    insertTodo(`${todoContent} ${date}`,false);
    saveTodo();
})


var insertTodo = function(content,done){
     var todoContainer = querySelector('#todo-container');
     var doneStyle = '';
     if(done){
         doneStyle = 'todo-done'
     }
     var t =
         `<div class = "doto-cell ${doneStyle}">
            <button class = "button-finish"> 完成 </button>
            <button class = "button-delete"> 删除 </button> 
            <span class = 'todo-content'> ${content}</span> 
         </div>
        `
     todoContainer.insertAdjacentHTML('beforeend', t);
}

var todoContainer = querySelector('#todo-container');
todoContainer.addEventListener('click',function(event){
    log(event)
    var target = event.target;
    if (target.classList.contains('button-finish')) {
        var cellDiv = target.parentElement;
        toggleClass(cellDiv,'todo-done')
        saveTodo();
    }else if(target.classList.contains('button-delete')){
        var cellDiv = target.parentElement;
        cellDiv.remove();
        saveTodo();
    }
})

var toggleClass = function(element,className){
    if(element.classList.contains(className)){
        element.classList.remove(className);
    }else
    {
        element.classList.add(className);
    }
}


//进行本地缓存
// localStorage 只能存字符串
// 需要将值进行序列化 JSON.stringify()

var saveTodo = function(){
    var todoCells = document.querySelectorAll('.todo-content');
    var todos = [];
    for (const item of todoCells) {
        var parentElement = item.parentElement;
        var done = parentElement.classList.contains('todo-done');
        var todo = {
            done:done,
            content:item.innerHTML
        }
        todos.push(todo);
    }
    var s = JSON.stringify(todos);
    localStorage.todos = s;
}

function loadTodos(){
    var s = localStorage.todos;
    var todos = JSON.parse(s);
    for (const todo of todos) {
        insertTodo(todo.content, todo.done)
    }
}

loadTodos();


//获取时间
var getTime = function(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var h = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    return `${year}/${month}/${day} ${h}:${mm}:${ss}`
}