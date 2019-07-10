
>toc:生成目录
>{ignore}:忽略这个，就是不把这个生成目录里面
// CSS选择器介绍
// 阮一峰 http://www.ruanyifeng.com/blog/2009/03/css_selectors.html


#CSS套路 {ignore}

[toc]

## 三种主要选择器
元素选择器
class选择器
id 选择器

## 样式优先级
!important > 内联样式 > `<style>`中的样式 > `link`中的样式

## 选择器优先级
!important > 内联样式 > id 选择器 > class选择器 > 元素选择器

## display属性
>block
>inline
>inline-block

block 占一行
默认的block标签有
> div p ul ol li h1 h2 h3 h4 h5 h6

inline只占content的尺寸
inline-block 是 inline 布局 block 模式
inline-block 对外表现为 inline，所以可以和别的 inline 放在一行
对内表现为 block，所以可以设置自身的宽高

## 盒模型

inline 元素没有盒模型

    padding
    border
    margin

## position

用于进行元素定位

    static
    relative
    absolute
    fixed

    默认都是static。
    非 static 元素可以用 top left bottom right 属性来设置坐标
    非 static 元素可以用 z-index 属性来设置显示层次
    relative 是相对定位
    absolute 完全绝对定位, 忽略其他所有东西
        往上浮动到 非 static 的元素
    fixed 基于 window 的绝对定位, 不随页面滚动改变

## overflow

    visible 默认
    auto 需要的时候加滚动条
    hidden 隐藏多余元素
    scroll 就算用不着也会强制加滚动条

## 盒模型相关的CSS


    border
        border-width
        border-style
        border-color
    3 个属性可以简写为一句
    border: 3px red solid;

    border-top
        border-top-width
        border-top-style
        border-top-color

    border-right
        border-right-width
        border-right-style
        border-right-color

    border-bottom
        border-bottom-width
        border-bottom-style
        border-bottom-color

    border-left
        border-left-width
        border-left-style
        border-left-color



    margin
        margin-top
        margin-right
        margin-bottom
        margin-left

    padding
        padding-top
        padding-right
        padding-bottom
        padding-left

    三种缩写, 分别对应有 4 2 3 个值的时候的解释, padding 同理
    margin: top  right  bottom  left
    margin: (top/bottom)  (right/left)
    margin: top  (right/left)  bottom

    border-radius 是用来设置圆角度数的
    它也拥有三种缩写, 对应的含义如下
    左上角为 top, 右下角为 bottom

    background 相关属性和缩写
        background-color: #233;
        background-image: url(bg.png);
        background-repeat: no-repeat;
        background-attachment: fixed; /* 背景图片随滚动轴的移动方式 */
    简写如下
    background: #233 url(bg.png) no-repeat;

## 居中设置

    block 元素居中
    margin: 0 auto;

    inline inline-block 元素居中
    text-align: center;

## 其他
text-decoration:
    underline
    overline
    line-through
    blink(这个值已经废弃了)




## 多种元素的组合选择器

    div,p      同时匹配
    div div    匹配后代
    div > p    匹配子元素
    div + div  匹配同级的下一个元素(仅匹配一个)

    其中 div p 与 div > p的区别
    前者匹配全部的后代元素，而后者仅匹配向下一层（子元素）

## 属性选择器 根据某类的属性来查找选择器

    E[att]
    E[att=val]

## 伪类选择器  实际不存在的类
    E:first-child
    E:link
    E:lang(c)

## 伪元素
    E:first-line
    E:first-letter
    E:before

        /* CSS3 语法 */
    element::before { 样式 }  

    /* （单冒号）CSS2 过时语法 (仅用来支持 IE8) */
    element:before  { 样式 }  

    /* 在每一个p元素前插入内容 */
    p::before { content: "Hello world!"; }

CSS3 引入 ::before  是为了将伪类和伪元素区别开来。浏览器也接受由CSS 2 引入的 :before 写法。

## CSS3 新特性

    border-radius 边框倒角
    box text shadow 盒子阴影
    transform   2D 变形
    Multi Column 将文本分隔成多列
    transition 动画


keyframe 动画和生成器
https://daneden.github.io/animate.css/
http://cssanimate.com/


其他 css3 生成器
http://css3generator.com/
http://www.css3generator.in/
http://css3.me/
https://www.tutorialspoint.com/css/css3_boarder_image.htm
