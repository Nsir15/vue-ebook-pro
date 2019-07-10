var bindNextEvent = function(){
    var sliderButton = document.querySelector('.slide-button')
    sliderButton.addEventListener('click',function(event){
        var slider = event.target.parentElement
        var id = slider.dataset.id
        var imgs = slider.dataset.images
        //计算下一张图的下标
        var index = (id + 1)%imgs
        var imgId = 'image-'+index
        var image = document.querySelector(`#${imgId}`)
        removeAllClass('.dom3-slide-image','dom3-slide-active')
        image.classList.add('dom3-slide-active')
        slider.dataset.id = index

        //关联indicator
        removeAllClass('.slider-indicator-default','slider-indicator-active')
        var indicatorId = 'indicator-'+index
        var indicator = document.querySelector(`#${indicatorId}`)
        indicator.classList.add('slider-indicator-active')
        console.log(index)
    })
}

var bindIndicatorEvent = function(){
    //暂时不想写
}

var removeAllClass = function(selector,className){
    var elements = document.querySelectorAll(selector)
    for (const element of elements) {
        if (element.classList.contains(className)) {
            element.classList.remove(className)
        }
    }
}

bindNextEvent()