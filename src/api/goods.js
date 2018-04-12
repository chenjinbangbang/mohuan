import request from '@/utils/request';

//获取图形验证码
export function getGoodsList(data){
  return request({
    url: '/goods/list',
    method: 'get',
    params: data
  });
}
