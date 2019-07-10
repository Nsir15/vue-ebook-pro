//自定义log
var log = function(){
    console.log.apply(console,arguments);
}


/**
 * 测试函数 (这种方式是匿名函数)
 * @param {*} condition  boolean值，测试是否通过
 * @param {*} message   错误信息
 */
var ensure = function(condition,message){
    if(!condition){
        log('测试失败',message);
    }
}


/*
   s1 s2 都是 string
   但 s2 的长度是 1

   返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
   */

function find(s1,s2){
    if(s1.includes(s2)){
        var length = s1.length;
        for (let index = 0; index < length; index++) {
            const element = s1[index];
            if (element == s2) {
                return index;
            }
        }
    }else
    {
        return -1;
    }
}

//测试

function test_find(){
    ensure(find('abc','e') === 0,'测试1失败');
    ensure(find('dog','g') === 2,'测试2失败');
}



/*
下面给出一个例子作为后面作业的参考
返回字符串的小写形式的函数
*/
//所有大小写字母的集合
var lower = 'abcdefghigklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function lowercase(s){
    var result = '';
    for (const item of s) {
        log(item);
        var index = find(upper, item);
        result += lower[index];
    }
    return result;
}


function test_lowercase(){
    ensure(lowercase('FUCK') === 'fuck','lowercase测试失败');
}


/*
作业 3

实现 lowercase1
它能正确处理带 小写字母 的字符串s
返回 小写字母 的字符串
*/

var lower = 'abcdefghigklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function lowercase1(s){
    var value = '';
    for (const item of s) {
        if (lower.includes(item)) {
            var index = find(lower, item);
            log(item);
            log(index);
            value += lower[index];
        }
    }
    return value;
}


/**
 * 返回小写 
 * @param {*} s 传入的字符串，里面包含大小写
 */
function lowercase2(s){
    var value = '';
    for (const item of s) {
        if (upper.includes(item)) {
            var index = find(upper,item);
            value += lower[index];
        }else
        {
            value += item;
        }
    }
    return value;
}


/*
作业 5
实现一个叫 凯撒加密 的加密算法, 描述如下
对于一个字符串, 整体移位, 就是加密
以右移 1 位为例
原始信息 'afz' 会被加密为 'bga'
实现 encode1 函数, 把明文加密成密码并返回
右移 1 位

注意, 假设字符串一定只包含小写字符
*/

function encode1(s){
    var result = '';
    var length = lower.length;
    for (const item of s) {
        var index = find(lower,item);
        var newIndex = (index + 1) % length;
        log(`index:${index},newIndex:${newIndex},length:${length}`);
        result += lower[newIndex];
    }
    return result;
}

/*
作业 6
实现 decode1 函数, 把作业 5 加密的密码解密为明文并返回
*/
function decode1(decodeS){
    var result = '';
    var length = lower.length;
    for (const item of decodeS) {
        var index = find(lower,item);
        var newIndex = (index + (length - 1)) % length;
        result += lower[newIndex];
    }
    return result;
}

/*
作业 7
实现 encode2
多了一个参数 shift 表示移的位数
shift:位移的位数
*/
function encode2(s,shift){
    var result = '';
    var length = lower.length;
    for (const item of s) {
        var index = find(lower,item);
        var newIndex = (index + shift) % length;
        result += lower[newIndex];
    }
    return result;
}

function test_encode2(){
    ensure(encode2('afz',1) === 'bga','encode2测试1失败');
    ensure(encode2('mxc',5) === 'rch','encode2测试2失败');
}

/*
作业 8
实现 decode2
多了一个参数 shift 表示移的位数
*/
function decode2(decodeS,shift){
    var result = '';
    var length = lower.length;
    for (const item of decodeS) {
        var index = find(lower, item);
        var newIndex = (index + Math.abs(length - shift)) % length;
        result += lower[newIndex];
    }
    return result;
}
var test_decode2 = function () {
    ensure(decode2('afz', 1) === 'zey', "encode1测试1")
    ensure(decode2('mxc', 5) === 'hsx', "encode1测试2")
}


/*
作业 9
实现 decode3
多了一个参数 shift 表示移的位数
里面带有特殊符号，不用处理
*/
function decode3(s,shift){
    var result = '';
    var lowerStr = lowercase2(s);
    var length = lower.length;
    for (const item of lowerStr) {
        if(lower.includes(item)){
            var index = find(lower,item);
            var newIndex = (index + Math.abs(length - shift)) % length;
            result += lower[newIndex];
        }else
        {
            result += item;
        }
    }
    return result;
}


/*
作业 11
知乎有一个求助题, 破译密码的
链接在此
https://www.zhihu.com/question/28324597
这一看就是凯撒加密...
如果没思路, 可看本文件最后的提示
我把密码放在下面, 请解出原文
*/
//VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX


//先用最白痴的做法，就是把所有的可能都打印出来，用肉眼去判断

var encodeStr = 'VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX';

var decode4 = function(s){
    var lowerStr = lowercase2(encodeStr);
    for (let index = 0; index < 26; index++) {
       var result = decode3(lowerStr,index);
       log(result+'\n');
       var splicArray = result.split(' ');
       log(splicArray);
    }
    return result;
}


//主要是通过频率分析
/**
 * 
 * 摘自百度百科：
 * 
 * 另外一种攻击方法是通过频率分析。当密文长度足够大的情况下，可以先分析密文中每个字母出现的频率，然后将这一频率与正常情况下的该语言字母表中所有字母的出现频率做比较。
 * 例如在英语中，正常明文中字母E和T出现的频率特别高，而字母Q和Z出现的频率特别低，而在法语中出现频率最高的字母是E，最低的是K和W。
 * 可以通过这一特点，分析密文字母出现的频率，可以估计出正确的偏移量。
 * 此外，有时还可以将频率分析从字母推广到单词，例如英语中，出现频率最高的单词是[7]：the, of, and, a, to, in...。我们可以通过将最常见的单词的所有可能的25组密文，编组成字典，进行分析。
 * 比如QEB可能是the，MPQY可能是单词know（当然也可能是aden）
 */

 var decode5 = function(s){
    
     for (let index = 0; index < lower.length; index++) {
         var str = decode3(encodeStr, index);
         var splitStr = str.split(' ');
         var score = rank(splitStr);
         if(score > 10){
             log(str);
         }
     }
    
 }

 var rank = function(wordList){
    var score = 0;
    for (const word of wordList) {
        if (words.includes(word)) {
            score ++;
        }
    }
    return score;
 }

//匿名函数
// var process = function(array,express){
//     var newArray = [];
//     for (const item of array) {
//         var element = express(item);
//         newArray.push(element);
//     }
//     return newArray;
// }

var process = function(array,express){
    var l = [];
    array.forEach(element => {
        var element = express(element);
        l.push(element);
    });
    return l;
}
var array = [1,2,3];
var addList = process(array,function(n){
    return n + 1;
})

