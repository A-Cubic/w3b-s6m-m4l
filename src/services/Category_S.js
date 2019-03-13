import request from '@/utils/request';

export async function queryProvince() {
  return request('/api/geographic/province');
}

export async function queryCity(province) {
  return request(`/api/geographic/city/${province}`);
}


export async function getCategoryGoods(params) {
  return request('http://192.168.0.127:54195/llback/NewHomePage/CategoryGoods', {
   method: 'POST',
   body: params,
 });
}
export async function getAllClassification(params) {
  return request('http://192.168.0.127:54195/llback/NewHomePage/AllClassification', {
   method: 'POST',
   body: params,
 });
}
