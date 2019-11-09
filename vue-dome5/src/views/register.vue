<template>
  <div class="logbox">
      <div class="header">
      </div>
      <div class="main">
            <input type="text" placeholder="用户名">
            <input type="password" placeholder="登录密码">
            <button>注册</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.logbox{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    .main{
        width:100%;
        flex:1;
    }
}
</style>
