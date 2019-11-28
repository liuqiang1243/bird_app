import axios from 'axios';
axios.defaults.baseURL="../../static/moke/";
//请求之前的拦截 （后台）
axios.interceptors.request.use((config)=>{
  // console.log('加载啊。。。');
  return config;
});
//数据响应的拦截
axios.interceptors.response.use((response)=>{
  return response.data;
});
//axios的封装
export let  getHotList=function(){
  return axios.get('hotlist.json');
};
export let  getFaxian=function(){
  return axios.get('faxian.json');
};
