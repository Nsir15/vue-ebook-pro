// 鼠标滑过高亮的效果

var log = function(){
    console.log.apply(console,arguments)
}

/**
 * 根据selector或者元素
 * @param  {[type]} selector [description]
 * @return {[type]}          [description]
 */
var getElemet = function(selector){
    return document.querySelector(selector)
}

var getElementAll = function(selector){
    return document.querySelectorAll(selector)
}

var bindAll = function(eventName,selector,callback){
    var elements = getElementAll(selector)
    for (const e of elements) {
        e.addEventListener(eventName,callback)
    }
}

var bindEventItems = function(){
    bindAll('mouseenter','.item',function(event){
        log('mouseenter===')
        event.target.classList.add('img-highlight')
    })

    bindAll('mouseleave','.item',function(event){
        log('mouseleave===')
        event.target.classList.remove('img-highlight')
    })
}

var __main = function(){
    bindEventItems()
}
__main()
