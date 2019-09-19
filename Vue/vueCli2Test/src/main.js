import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })


new Vue({
  el:'#app',
  render:(createElement) => {
    // 使用方式一：
    // return createElement('标签','相关的数据对象（可以不传）',['内容数组'])
    // return createElement('div',{class:'box'},['我是内容'])
    // 可以嵌套render函数
    return createElement('div',{class:'box'},['我是外面的盒子',createElement('div',{class:'box2'},['我是里面的盒子'])])
  }
});

