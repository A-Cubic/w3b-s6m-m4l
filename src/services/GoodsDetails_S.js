import request from '@/utils/request';

export async function queryProvince() {
  return request('/api/geographic/province');
}

export async function queryCity(province) {
  return request(`/api/geographic/city/${province}`);
}

export async function getGoodsDetails(params) {
  return request('http://192.168.0.127:54195/llback/NewHomePage/GoodsDetails', {
   //return request('/llback/NewHomePage/CountryGoods', {
   method: 'POST',
   body: params,
 });
}