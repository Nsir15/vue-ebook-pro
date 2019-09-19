<template>
   <div>
     <!-- <h3>countPlusLocalState:{{countPlusLocalState}}</h3>
     <h3>countAlias:{{countAlias}}</h3>
     <h3>年龄大于20岁的人:{{getGreaterAge}}</h3> -->
     <!-- <h3>{{this.$store.getters.getGreaterAge}}</h3>
     <h4>个数是：{{this.$store.getters.getGreaterAgeCount}}</h4>
     <h4>查找ID是110的学生:{{studentsById}}</h4>
     <button @click="increment">+1</button>
     <button @click="decrement">-1</button> -->

     <!-- module  start-->
     <h3>moduleA中的count:{{$store.state.a.count}}</h3>
     <h3>{{count}}</h3>
     <button @click="increment">+1</button>
     <!-- module end -->
   </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
      localCount:4
    }
  },
  computed:{
    // count(){
    //   return this.$store.state.count
    // },
    // studentsById(){
    //   return this.$store.getters.getStudentById(110)
    // }
    count(){
      return this.$store.getters.doubleClick
    }
  },
  // computed:mapState({
  //   // count:state=>state.count,
  //   // 字符串参数 'count' 等同于 `state => state.count`
  //   countAlias:'count',
  //   // 为了保证this，使用常规函数而不是箭头函数
  //   countPlusLocalState(state){
  //     return state.count + this.localCount
  //   },
  //   getGreaterAge(state){      
  //     return state.students.filter(({age}) => {        
  //         return age >= 20
  //       });
  //   },
  // }),
  methods:{
    increment(){
      console.log('increment');
      
      // this.$store.commit('increment');
      this.$store.dispatch('incrementIfOddOnRootSum')
    },
    decrement(){
      console.log('decrement');
      
      this.$store.commit('decrement');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
