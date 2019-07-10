
    var saveTask = function (task) {
        var todoList = loadTask()
        todoList.push(task)
        var s = JSON.stringify(todoList)
        localStorage.todos = s
    }

    var loadTask = function () {
        var todoStr = localStorage.todos
        //初始的todoList 是undefined ,直接调用push 会出错
        // todoList.push(taskObject)
        if (todoStr == undefined) {
            todoStr = '[]'
        }
        var todoList = JSON.parse(todoStr)
        return todoList
    }

    var template = function (task) {
        var t = `
        <div class="task-cell">
            <button class="task-done">完成</button>
            <button class="task-delete">删除</button>
            <span>${task.task}</span>
        </div>
        `
        return t
    }

    var insertTask = function (todoList) {
        var taskContainer = getElement('.task-list')
        for (const todo of todoList) {
            appendHTML(taskContainer, template(todo))        }
    }
