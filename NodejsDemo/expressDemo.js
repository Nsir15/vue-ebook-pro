var express = require('express')
var app = express()
app.get('/',function(req,res){
  res.send('hello Nancy')
})

app.get('/del_user',function(req,res){
    res.send('响应删除页面请求')
})

//对页面abcd,abxcd,ab123cd等get请求做出响应
app.get('/ab*cd',function(req,res){
  res.send('正则匹配')
})

var server = app.listen(8081,function(){
  var host = server.address().address
  var port = server.address().port
  console.log('应用实例访问的地址是http://%s:%s',host,port);
})
