<template>
  <div class="logbox">
      <div class="header">圈子</div>
      <div class="main">
          <input type="text" placeholder="用户名">
          <input type="password" placeholder="登陆密码">
          <button>登陆</button>
          <router-link to="/register">没有账号,快速注册</router-link>
      </div>
  </div>
</template>

<script>
import {login} from '@/service/index'
export default {
    data(){
        return {
            userName:'',
            userPwd:''
        }
    },
    methods:{
        async lofin(){
            let{userName,userPwd}=this;
            let result=await login({userName,userPwd})
        }
    }
}
</script>

<style lang="scss">
.logbox{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    .header{
        width:100%;
        height: .8rem;
        color:red;
        font-size: .5rem;
        text-align: center;
        line-height:.8rem;        
    }
    .main{
        width:100%;
        flex:1;
        input{
            width:85%;
            height:.8rem;
            text-align: center;
            margin-left:7.5%;
            border:none;
            background: #f2f2f2;
        }
        button{
            width:85%;
            height:.8rem;
            margin-left:7.5%;
            color:#fff;
            font-size: .4rem;
            border:none;
            background: #f76968;
        }
        a{
            display: block;
            font-size: .3rem;
            margin-top:.2rem;
            margin-left:7.5%;
        }
    }
}

</style>
