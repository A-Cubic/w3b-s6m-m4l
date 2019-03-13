import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';
export async function queryProvince() {
  return request('/api/geographic/province');
}

export async function queryCity(province) {
  return request(`/api/geographic/city/${province}`);
}

export async function getBrandsGoods(params) {
  return request(`${testUrl}/llback/NewHomePage/BrandsGoods`, {
   method: 'POST',
   body: params,
 });
}
