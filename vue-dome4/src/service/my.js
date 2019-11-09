import axios from 'axios';

// 注册
export let register = params=>{
    return axios.post('/api/user/register', params);
}

//登陆
export let login = params=>{
    return axios.post('/api/user/login', params);
}

// 用户名
export let loginUser = ()=>{
    return axios.get('/api/user/loginUser');
}