import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';


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
