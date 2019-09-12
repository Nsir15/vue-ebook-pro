<template>
  <h2 class="title">{{name}}</h2>
</template>

<script>
export default {
  name:'App',
  data(){
    return{
      name:'我是.vue的组件的内容，我为自己带盐,lalal'
    }
  }
}
</script>

<style>
.title{
  color: blue;
  outline: 2px solid orange;
}
</style>