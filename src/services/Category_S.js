import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';

export async function getCategoryGoods(params) {
  return request(`${apiUrl}/llback/NewHomePage/CategoryGoods`, {
   method: 'POST',
   body: params,
 });
}
export async function getAllClassification(params) {
  return request(`${apiUrl}/llback/NewHomePage/AllClassification`, {
   method: 'POST',
   body: params,
 });
}
