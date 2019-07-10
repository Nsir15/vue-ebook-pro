
/** ====================== 辅助函数 ==============================*/

var log = function(){
    return console.log.apply(console,arguments)
}


var ajax = function(method,path,data,responseCallback){
    var a = new XMLHttpRequest()
    a.open(method,path,true)
    a.setRequestHeader('Content-Type','application/json')
    a.onreadystatechange = function(){
        if (this.readyState === 4) {
            responseCallback(a)
        }
    }
    a.send(data)
}

var appendHTML = function(element,template){
    element.insertAdjacentHTML('beforeend',template)
}

var getElement = function(selector){
    return document.querySelector(selector)
}

/********************************    ******************************************** */
var init = function(){
    var template = `
        <input id='id-input-task'>
        <button id='id-input-add'>Add TODO</button>
    `
    appendHTML(getElement('#id-todo-form'),template)
}

var loadList = function(){

    var method = 'GET'
    var path = 'http://v.juhe.cn/movie/cinemas.movies?key=46cf8a8560b10ec8ccf1ac8b93878eb7&cinemaid=1188'
    var data = ''
    ajax(method,path,data,function(a){
         var result = JSON.parse(a.response)
         log('result')
         log(result)
         if (result.error_code === 0) {
             var lists = result.result.lists
             log('lists')
             log(lists)
             insertList(lists)
         }
    })
}


var listTemplate = function(object){

    /**
     * 
     movieId: "213190"
     movieName: "哥斯拉2：怪兽之王"
     pic_url: "http://img5.mtime.cn/mt/2019/05/23/095633.44711442_182X243X4.jpg"
     */

     var template = `
        <div class='list-cell'>
            <button class='list-cell-finishbutton'>完成</button>
            <button class='list-cell-deletebutton'>删除</button>
            <span class='list-content'>${object.movieName}</span>
        </div>
     `
     return template
}

//插入列表
var insertList = function(lists){
    var container = getElement('#id-todo-container')
    for (const object of lists) {
        appendHTML(container,listTemplate(object))
    }
}


var bindDeleteEvent = function(){
    var container = getElement('#id-todo-container')
    container.addEventListener('click',function(event){
        var target = event.target
        log(target.classList)
        if (target.classList.contains('list-cell-deletebutton')) {
            target.parentElement.remove()
        }
    })
}


var bindEventSubmit = function(){
    var addButton = getElement('#id-input-add')
    addButton.addEventListener('click',function(){
        var input = getElement('#id-input-task')
        var t = `
        <div class ='list-cell'>
            <button class = 'list-cell-finishbutton'> 完成 </button> 
            <button class = 'list-cell-deletebutton'> 删除 </button> 
            <span class = 'list-content'>${input.value}</span> 
        </div>
        `
        var container = getElement('#id-todo-container')
        appendHTML(container,t)
    })
}


var __main = function(){
    init()
    loadList()
    bindDeleteEvent()
    bindEventSubmit()
}