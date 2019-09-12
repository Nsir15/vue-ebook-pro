const mathUtils = require('./js/mathUtils')
console.log('add-',mathUtils.add(1,2));
console.log('mul-',mathUtils.mul(5,4));
require('./css/normal.css')
require('./css/special.less');

document.writeln('<p>我是js插入的内容</p>');

import Vue from 'vue'

var cnp = {
  template:'<h2>{{name}}</h2>',
  data(){
    return{
      name:'Im your father -- 来自组件'
    }
  }
}
// var app = new Vue({
//   el:'#app',
//   template:`<div>
//           {{message}}
//           <cnp/>
//             </div>`,
//   data:{
//     message:'我是Vue'
//   },
//   components:{
//     cnp
//   }
// });

import App from './js/App.vue';
var app = new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App,
  }
});