<template>
  <div class="tabBar">
    <div class="tabBarItem">
      <img src="" alt="">
      首页
    </div>
    <div class="tabBarItem">
      <img src="" alt="">
      商城
    </div>
    <div class="tabBarItem">
      <img src="" alt="">
      购物车
    </div>
    <div class="tabBarItem">
      <img src="" alt="">
      我的
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  .tabBar{
    display: flex;
    height: 49px;
    align-items: center;
    background: azure;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
  }
  .tabBarItem{
    flex: 1;
    text-align: center;
  }
</style>
