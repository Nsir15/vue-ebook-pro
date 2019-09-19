<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <h3>网站标题</h3>
    <router-link to="/home">首页</router-link>
    <router-link to="/about/123">关于</router-link>
    <!-- <router-link :to="{path:'/profile/123'}">档案</router-link> -->
    <!-- <router-link to="/profile/124">档案</router-link> -->

    <!-- <router-link :to="{path:'/profile',
                      query:{name:'zhangsan',age:100}}">档案</router-link> -->
    <button @click="toProfile">档案</button>
    <router-view></router-view>

    <!-- <button @click="linkToHome">首页</button>
    <button @click="linkToAbout">关于</button>
    <router-view></router-view> -->

    <h3>底部版权信息</h3>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    linkToHome(){
      this.$router.push('/home')
    },
    linkToAbout(){
      this.$router.push('/about/124')
    },
    toProfile(){
      this.$router.push({
        path:'/profile/33445',
        query:{
          name:'petter',
          gender:'male'
        }
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
