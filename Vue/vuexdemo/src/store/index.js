import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleA = {
  state:{
    count:0
  },
  mutations:{
    // 这里的 `state` 对象是模块的局部状态
    increment:state => state.count ++
  },
  getters:{
    // 这里的 `state` 对象是模块的局部状态
    doubleClick(state){
      console.log(state.count);
      
      return  state.count * 2
    }
  },
  actions:{
    incrementIfOddOnRootSum({state , commit , rootState}){
        if((state.count + rootState.globalCount) % 2 === 1){
          commit('increment')
        } 
    }
  }
};


const store = new Vuex.Store({
  state:{
    globalCount:111,
  },
  modules:{
    a:moduleA
  }
});


// const store = new Vuex.Store({
//   state:{
//     count:0,
//     students:[
//       {id:110,name:'zhangSan',age:18},
//       {id:111,name:'lisi',age:20},
//       {id:112,name:'wangwu',age:21},
//       {id:113,name:'guaiJiaoQi',age:40}
//     ]
//   },
//   getters:{
//     getGreaterAge(state){
//       return state.students.filter(({age})=>{
//           return age >= 20;
//       });
//     },
//     getGreaterAgeCount(state,getters){
//       return getters.getGreaterAge.length
//     },
//     getStudentById:state => {
//       return id => {
//         return  state.students.find(s => s.id === id)
//       }
//     }
//   },
//   mutations:{
//     increment(state){
//       console.log('mutations-increment');
      
//       state.count ++;
//     },
//     decrement(state){
//       console.log('mutations--decrement');
      
//       state.count --;
//     }
//   },
// });

export default store;