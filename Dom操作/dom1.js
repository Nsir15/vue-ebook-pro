//折叠菜单

// 可以用来插入CSS
var addCSS = function(){
    var t = `
            div .content{
                outline:red 1px dashed;
            }
    `
    var head = document.querySelector('style')
    head.insertAdjacentHTML('beforeend',t)
}


var getElemetn = function(selector){
    return document.querySelector(selector)
}

var toggle = function(element,className){
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    }else
    {
        element.classList.add(className)
    }
}

// 只给单个的添加事件
var bindToggleButtonEvent = function(){
    var  toggleButton =  getElemetn('.toggle-button')
    toggleButton.addEventListener('click',function(){
        var content = getElemetn('.content')
        toggle(content,'hidden')
    })
}

var bindAllToggle = function(){
    var container = getElemetn('.dom1-container')
    container.addEventListener('click',function(event){
        var parentElement = event.target.parentElement
        var c = find(parentElement,'.content')
        console.log(c);
        
        toggle(c,'hidden')
    })
}

var find = function(element,selector){
    return element.querySelector(selector)
}

var __main = function(){
    // bindToggleButtonEvent()
    bindAllToggle()
    addCSS()
}