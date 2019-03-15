import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';
export async function queryProvince() {
  return request('/api/geographic/province');
}

export async function queryCity(province) {
  return request(`/api/geographic/city/${province}`);
}

export async function getBrandsGoods(params) {
  return request(`${apiUrl}/llback/NewHomePage/BrandsGoods`, {
   method: 'POST',
   body: params,
 });
}

export async function getUserCollection(params) {
  return request(`${apiUrl}/llback/NewHomePage/UserCollection`, {
   method: 'POST',
   body: params,
 });
}
