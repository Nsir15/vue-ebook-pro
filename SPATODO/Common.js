var log = function(){
    console.log.apply(console,arguments)
}

var getElement = function(selector){
    return document.querySelector(selector)
}

var bindEvent = function(element,eventName,callback){
    element.addEventListener(eventName,callback)
}

var appendHTML = function(element,template){
    element.insertAdjacentHTML('beforeend',template)
}

var bindEventWithAllElement = function(selector,eventName,callback){
    var elements = document.querySelectorAll(selector)
    for (const element of elements) {
        bindEvent(element,eventName,callback)
    }
}

var toggleClass = function(element,className){
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    }else
    {
        element.classList.add(className)
    }
}

