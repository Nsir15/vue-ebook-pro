<template>
  <div>
    <h3>我是home主页</h3>
    <p>home主页里面的内容</p>
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/news">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'home'
}
</script>

<style>

</style>