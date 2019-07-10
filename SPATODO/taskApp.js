 var showList = function () {
     var todoList = loadTask()
     insertTask(todoList)
 }

 //给添加按钮添加事件
 var bindAction = function () {

     bindEventWithAllElement('.home-tab', 'click', homeTabAction)

     var addButton = getElement('.task-add')
     bindEvent(addButton, 'click', function (event) {
         log('add click')
         var input = getElement('.task-input')
         var task = input.value
         if (!task.length) {
             alert('请输入文字')
             return
         }
         var taskObject = {
             task: task,
             done: false
         }
         saveTask(taskObject)
         reloadTaskList()
     })

     window.addEventListener("popstate",function(event){
        log(event.state)
        var pageName = event.state.page
        showPage('task-'+pageName)
     })
 }


var reloadTaskList = function(){
    //清空现有的tasklist
    var taskList = getElement('.task-list')
    taskList.innerHTML = ''
    showList()
}

var homeTabAction = function (event) {
    log('hometab')
    var inId = event.target.dataset.in
    showPage('task-'+inId)
    pushState(inId)
}

/**改变地址栏信息
 * 
 * @param {*} pageName  页面的路径名字
 */
var pushState = function(pageName){
    var params = {
        page:pageName
    }

    var url = 'SPATodo.html?page=' + pageName
    history.pushState(params, 'title', url)

    //修改标签名称
    document.title = pageName
}

var showPage = function(pageName){
    var pages = document.querySelectorAll('.task-page')
    for (const page of pages) {
        page.classList.add('dom-hidden')
    }

    var page = getElement('.' + pageName)
    if (page) {
        page.classList.remove('dom-hidden')
    }
}

var initial = function(){
    var url = location.search
    var [k,v] = url.slice(1).split('=')
    //初始化page为 home
    var page = 'home'
    //设置一个合法的page参数列表
    var validPages = ['home','editor','list']
    if (k == 'page') {
        page = v
    }
    var className = 'task-'+page;
    history.pushState(null, 'title', 'SPATodo.html?page=home')
    showPage(className)
}

var __main = function () {
    bindAction()
    showList()
    initial()
}
__main()