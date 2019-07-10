var log = function(){
    return console.log.apply(console,arguments);
}

var ensure = function(express,message){
    if(!express){
        log(message);
    }
}


/*
    delimiter 是 string
    array 是包含 string 的 array

    把 array 中的元素用 delimiter 连接成一个字符串并返回
    具体请看测试
    */

var join = function(delimiter,array){
    var s = array[0];
    for (let index = 1; index < array.length; index++) {
        const char = array[index];
        s += (delimiter + char);
    }
    return s;
}

ensure(join('%',['q','3','e']) == 'q%3%e','join 测试失败');
ensure(join('\n', ['multi', 'line', 'string']) == 'multi\nline\nstring', 'join 测试 3')

  /*
    s 是 string
    delimiter 是 string, 默认为空格 ' '

    以 delimiter 为分隔符号, 返回一个 array
    例如
    split('1 2 3') 返回 ['1', '2', '3']
    split('a=b&c=d', '&') 返回 ['a=b', 'c=d']
    注意, 测试 array 是否相等得自己写一个函数用循环来跑

     0123456789
    'a=bc=def'
    [0, 1, 4, s.length]
    (0, 1)
    (1, 4)
    (4, s.length)
    */

var seperator = function (s,delimiter = ' ') {
    //分隔符的长度，分隔符的长度不一定是1
    var space = delimiter.length;
    var array = [];
    var start = 0;
    for (let index = 0; index < s.length; index++) {
        var str = s.slice(index,index + space);
        if (str === delimiter) {
            var char = s.slice(start,index);
            if (char.length) {
                array.push(s.slice(start, index));
            }
            start = index + space;
        } 
    }

    //把最后的剩下的加进去
    array.push(s.slice(start));
    return array;
}


 /*
    s old newString 都是 string
    返回一个「将 s 中出现的所有 old 字符串替换为 new 字符串」的字符串
    */

var replace = function(s,old,newString){
    var array = seperator(s,old);
    var newS = join(newString,array);
    return newS;
}

ensure(replace('woshi%kuaile%dexiao%er%bi','%','0000') === 'woshi0000kuaile0000dexiao0000er0000bi','replace1测试失败');


 /*
    n 是 int
    返回这样规律的字符串, 特殊情况不考虑
    n       返回值
    1       '1'
    2       '121'
    3       '12321'

    1-n
    (n-1)-1
    */
// var str1 = function(n){
//     if (n == 1) {
//         return '1';
//     }
//     if (n == n -1) {
//         return str1(n - 1) + `${n}`;
//     }
//     return str1(n-1) + `${n}`+str1(n-1);
// }

var str1 = function(n){
    var s = '';
    for (let index = 1; index < n; index++) {
        s += String(index);
    }

    for (let index = n; index >0; index--) {
        s += String(index);
    }
    return s;
}


// 实现加法口诀表
/*
 '1 + 1 = 2',
 '2 + 1 = 3  2 + 2 = 4',
 '3 + 1 = 4  3 + 2 = 5  3 + 3 = 6',
**/

// 每一行的
var addLine = function(n){

    var s = '';
    for (let index = 1; index <= n; index++) {
       s +=`${n} + ${index} = ${n + index}`;  
       if (index < n) {
           s += '\t';
       }
    }
    return s;
}

var addTable = function(n){
    var tables = [];
    for (let index = 1; index <= 9; index++) {
        tables.push(addLine(index));
    }
    return join('\n',tables);
}


/*
    start end 都是 int

    返回一个 array, 假设 start 为 1, end 为 5, 返回数据如下
    [1, 2, 3, 4]
    */

var range1 = function(start,end){
    var s = '';
    for (let index = start; index <= end; index++){
        s += index;
  }
  return seperator(s,'');  //这个其实做的不对，这样返回的是【'1','2','3','4'】.其实用数组直接push就可以
}

/*
    start end step 都是数字
    step 是大于 0 的正整数

    返回一个 array
    假设 start=1, end=5, step=1 返回数据如下
    [1, 2, 3, 4]
    假设 start=0, end=6, step=2 返回数据如下
    [0, 2, 4]
 */

var range2 = function(start,end,step){
    var array = [];
    for (let index = start; index < end; index += step) {
        array.push(index);
    }
    return array;
}

  /*
    start end step 都是数字

    和 range2 一样, 但是要求支持负数 step
    使用 while 循环
    返回一个 array
    假设 start=1, end=5, step=1 返回数据如下
    [1, 2, 3, 4]
    假设 start=6, end=0, step=-1 返回数据如下
    [6, 5, 4, 3, 2, 1]
    */

var range3 = function(start,end,step){
    var array = [];
    var element = start;
    while (step > 0 ? element < end : element > end) {
        array.push(element);
        element = element + step;
    }
    return array;
}

/*
    js 标准数学库有一个随机数函数
    Math.random()
    它返回 0 - 1 之间的小数

    用它实现本函数, 返回 0 或 1
*/

var random1 = function(){
    return Math.floor(Math.random() * 10) % 2;
}

/*
    返回一个只包含了 0 1 的随机 array, 长度为 n
    假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    [0, 0, 1, 0, 1]
 */

var random2 = function(n){
    var array = [];
    for (let index = 0; index < n; index++) {
        array.push(random1());
    }
    return array;
}

 /*
    返回以下格式的数据
    假设 n 为 3, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    注意, 这只是一个 array, 并不是它显示的样子
    注意, 这是一个 array 不是 string
    [
        [0, 0, 1],
        [1, 0, 1],
        [0, 0, 0],
    ]
    返回, 包含了 n 个『只包含 n 个「随机 0 1」的 array』的 array
*/

var random3 = function(n){

    var array = []
    for (let i = 0; i < n; i++) {
        array.push(random2(n));
    }
    return array;
}

 /*
    返回一个只包含了 0 9 的随机 array, 长度为 n
    假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    [0, 0, 9, 0, 9]

*/

var random4 = function(n){
    var array = [];
    for (let index = 0; index < n; index++) {
        var num = random1() * 9;
        array.push(num);
    }
    return array;
}


 /*
    array 是一个只包含了 0 9 的 array
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组
    复制数组用 array.slice(0) 实现

    标记规则如下
    对于下面这样的 array
    [0, 0, 9, 0, 9]
    标记后是这样
    [0, 1, 9, 2, 9]

    规则是, 0 会被设置为左右两边 9 的数量
 */

 var makeLine = function(array){
    var line = array.slice();

    for (let index = 0; index < line.length; index++) {
        const element = line[index];
            //先查找右边是9的数量
        if (element === 9 && index > 0) {
            if (line[index-1] != 9) {
                line[index - 1]++;
            }
        }

        // 查找嘴边是9的数量
        if (element === 9 && index < line.length - 1) {
            if (line[index+1] != 9) {
                line[index + 1]++;
            }
        }
    }
    return line;
 }


  /*
    array 是一个「包含了『只包含了 0 9 的 array』的 array」
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组

    范例如下, 这是 array
    [
        [0, 9, 0, 0],
        [0, 0, 9, 0],
        [9, 0, 9, 0],
        [0, 9, 0, 0],
    ]

    这是标记后的结果
    [
        [1, 9, 2, 1],
        [2, 4, 9, 2],
        [9, 4, 9, 2],
        [2, 9, 2, 1],
    ]

    规则是, 0 会被设置为四周 8 个元素中 9 的数量
*/

var makeSquare = function(arr){
    var array =  arr.slice();
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            
            if (array[x][y] === 9) {
            
            //先处理左边三个
                deal(array, x - 1, y - 1);
                deal(array, x - 1, y);
                deal(array, x - 1, y + 1);

            // 再处理右边三个
                deal(array, x + 1, y - 1);
                deal(array, x + 1, y);
                deal(array, x + 1, y + 1);

            //处理最后的上下两个
                deal(array,x ,y - 1);
                deal(array,x ,y + 1);
            }
        }      
    }
    return array;
}

var deal = function(array,x,y){
    if (x >= 0 && y >= 0 && y < array.length  && x < array.length ) {
         if (array[x][y] !== 9) {
            array[x][y]++;
         }
    }
}

 /*
    s1 是一个字符串
    s2 是一个字符串
    检查 s1 是否以 s2 开头, 返回 true 或者 false
*/
var startWith = function(s1,s2){
    if (s1.length < s2.length) {
        return false;
    }
    var prefixLength = s2.length;
    var prefixWithS1 = s1.slice(0,prefixLength);
    if (prefixWithS1 == s2) {
        return true;
    }
    return false;
}


/*
    s1 是一个字符串
    s2 是一个长度为 1 的字符串
    返回参数 s2 在 s1 中第一次出现的下标
    如果 s2 没有在 s1 中出现, 返回 -1
*/
var findIn = function(s1,s2){
    var index = 0;
    for (const s of s1) {
        if (s == s2) {
            return index;
        }
        index ++;
    }
    return -1;
}

 /*
    s1 是一个字符串
    s2 是一个长度为 1 的字符串
    返回参数 s2 在 s1 中出现的所有下标组成的 array
    如果 s2 没有在 s1 中出现, 返回空数组 []
*/

var findIn01 = function(s1,s2){
    var results = [];
    for(var index in s1){
        if (s1[index] == s2) {
            results.push(index)
        }
    }
    return results;
}

/*
    s1 是一个字符串
    s2 是一个字符串, 长度未知, 不一定为 1
    返回参数 s2 在 s1 中出现的下标组成的 array
    如果 s2 没有在 s1 中出现, 返回 []
*/

var findAll = function(s1,s2){
    var length = s2.length;
    var results = [];
    for (let index = 0; index < s1.length; index++) {
        
        if (s1.slice(index,index + length) == s2) {
            results.push(index);
        }
    }
    return results;
}

ensure(findAll('abcabcscsc', 'c').join('') == ['2', '5', '7', '9'].join(''), '③')


/*
    s1 是一个字符串
    s2 是一个字符串
    检查 s1 是否以 s2 结尾, 返回 true 或者 false
*/

var endWith = function(s1,s2){
    if(s1.length < s2.length){
        return false;
    }
    var length = s2.length;
    if (s1.slice(s1.length - length) == s2) {
        return true;
    }
    return false;
}


/*
    students 是 array
    里面的每个元素都是如下格式的 object
    {
        'name': 'gua',
        'sex': '男',
        'score': 127,
    }
    返回 score 最高的那个元素(object)
*/
var top01 = function(array){
    var top = array[0];
    for (var  index in  array) {
        var student = array[index];
        var score = student.score;
        if (top.score < score) {
            top = student;
        }
    }
    return top;
}

var student_list = [{
        'name': 'gua1',
        'sex': '男',
        'score': 627,
    },
    {
        'name': 'gua2',
        'sex': '男',
        'score': 99,
    },
    {
        'name': 'gua3',
        'sex': '男',
        'score': 199,
    },
    {
        'name': 'gua4',
        'sex': '男',
        'score': 299,
    },
    {
        'name': 'gua5',
        'sex': '男',
        'score': 499,
    },
]

top01(student_list)


/*
    day 是代表星期的数字, 从周一到周日分别是 1 2 3 4 5 6 7
    返回 '星期一' '星期二' 这样的描述字符串
*/

var getweek = function(day){
    if (day < 0 || day > 7) {
        return;
    }
    var weeks = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
    return weeks[day-1];
}

/*
    price 是一个 int
    grade 合法情况下一共 6 种取值, 还可能没有给出这个参数
        '小学生'
        '初中生'
        '高中生'
        '大学生'
        '研究生'
    对应的折扣分别是 5 6 7 8 9

    注意, 如果调用者没有给出 grade 参数, 没有折扣

    返回折扣后的价格
*/
var discount = function(price,grade){
    var discountRange = [10,5,6,7,8,9]
    var grades = [undefined,'小学生','初中生','高中生','大学生','研究生']
    var index = 0;
    for (const item of grades) {
        if (item == grade) {
            return price * discountRange[index] * 0.1;
        }
        index ++;
    }
}


 /*
    array 是 array 类型, 里面的元素都是字符串

    按如下的格式返回这个 array
    假设 array 是 ['python', 'js', 'objective-c']
    那么返回的数据是一个数组, 多了首尾两个元素
    [
        '+++++++++++++++',
        '+ python      +',
        '+ js          +',
        '+ objective-c +',
        '+++++++++++++++',
    ]
    返回包含了 string 的 array
*/

var repeat = function(char,count){
    var s = '';
    for (let index = 0; index < count; index++) {
        s += char;
    }
    return s;
}

var stringLine = function(originStr,maxLength){
    var char = '+';
    var s = '';
    if (originStr.length) {
        s += `+ ${originStr}`;
        for (let index = 0; index < (maxLength - originStr.length); index++) {
            s += ' ';
        }
        s += ' +';
    }else
    {
        s += repeat('+',maxLength + 4);
    }
    return s;
}

var prettyLog = function(array){
    var length = array.length;
    //返回里面最长字符串的那个长度
    var maxLength = array[0].length;
    for (const string of array) {
        if (string.length > maxLength) {
            maxLength = string.length;
        }
    }
    
    var newArray = []
    newArray.push('');
    //concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
    newArray = newArray.concat(array.slice());
    newArray.push('');
    log(newArray + array);
    var results = [];
    for (let index = 0; index < newArray.length; index++) {
        results.push(stringLine(newArray[index],maxLength) + '\n');        
    }
    return results;
}



 /*
    n 是 int
    判断 n 是否是素数(质数)
*/

var isPrime = function(n){
    if (n <= 1) {
        return false;
    }
    for (let index = 2; index < n; index++) {
        if (n % index == 0) {
            return false;
        }
    }
    return true;
}

/*
    给定一个英文句子 str（一个只有字母的字符串）
    返回「将句中所有单词变为有且只有首字母大写的形式」的 string
*/

var capString = function(str){
    var lowCap = 'abcdefghijklmnopqrstuvwxyz'
    var upCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var strArray = seperator(str)
    var results = []
    for (var char of strArray) {
        var index = findIn(lowCap, char[0]) > 0 ? findIn(lowCap, char[0]) : findIn(upCap, char[0])
        char = char.replace(char[0],upCap[index])
        results.push(char)
        log(char)
    }
    return join(' ',results)

}

/*
    给定一个只包含字母的字符串，返回单个字母出现的次数
    考察字典的概念和使用
    返回值为包含数组的数组，格式如下（对数组中数组的顺序不做要求）

    // 可以使用 Object.keys 函数
    var obj = {
      foo: 1,
      bar: 2,
    }
    Object.keys(obj)
    ["foo", "bar"]

    参数 "hello"
    返回值 [['h', 1], ['e', 1], ['l', 2], ['o', 1]]
*/

var letterCount = function(str){
    // var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // var indexs = [];
    // for (const char of str) {
    //     var index = findIn(letters, char) 
    //     indexs.push(index)
    // }

    var obj = new Object();
    for (let i = 0; i < str.length-1; i++) {
        var char = str[i]
        var count = 1
        if (Object.keys(obj).includes(char)) {
            continue
        }
        for (let j = i + 1; j < str.length; j++) {
            var c = str[j]; 
            if (char == c) {
                count ++
            }
        }
        obj[`${char}`] = count
        if (!Object.keys(obj).includes(str[str.length - 1])) {
            obj[`${str[str.length-1]}`] = count
        }
    }
    return obj
}

/*
        param 是一个 object
        例子如下
        param 是 {
            'foo': 1,
            'bar': 'far',
        }
        返回如下 string, 顺序不做要求(foo bar 的顺序)
        foo=1&bar=far

        注意, 使用 Object.keys 函数
*/

var queryForObject = function(param){
    var s = ''
    var array = []
    for (const key of Object.keys(param)) {
        array.push(`${key}=${param[`${key}`]}`)
      
    }
    return join('&',array)
}

/*
        queryString 是一个 string
        例子如下
        queryString 是 foo=1&bar=far
        返回如下 object, 顺序不做要求(foo bar 的顺序)
        {
            'foo': 1,
            'bar': 'far',
        }
*/

var paramForString = function(str){
    var array = seperator(str,'&')
    var obj = new Object()
    for (var item  of array) {
        var arr = seperator(item,'=')
        obj[`${arr[0]}`] = arr[1];
    }
    return obj
}

/*
        利用上课板书, 实现 ajaxGet 函数, 用 GET 方法请求一个 URL
        url 是一个 URL
        callback 是一个函数, 在接受服务器响应后调用并传递参数给它
        本题不会就放弃
*/

var ajaxGet = function(request){
    var a = new XMLHttpRequest()
    a.open(request.method,request.url,true)
    a.setRequestHeader('Content-Type','application/json')
    a.onreadystatechange = function(){
        request.callback()
    }
    a.send
}

/*
        request 是一个 object, 有如下属性
        method, 请求的方法, string
        url, 请求的路径, string
        data, 请求发送的数据, 如果是 GET 方法则没这个值, string
        callback, 响应回调, function

        本题不会就放弃, 本题带了一个用法在下方
*/

var request = {
    method:'POST',
    url:'/login',
    data:'username=gua',
    callback:function(response){
        log('返回数据'+response)
    }
}
ajaxGet(request)