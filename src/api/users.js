import request from '@/utils/request';

//获取图形验证码
export function getCode(){
  return request({
    url: '/users/code',
    method: 'get'
  });
}

//用户注册
export function register(data){
  return request({
    url: '/users/register',
    method: 'post',
    data
  });
}
