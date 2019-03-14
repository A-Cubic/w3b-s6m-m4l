import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';




export async function getUserCollectionGoods(params) {
  return request(`${testUrl}/llback/NewHomePage/UserCollectionGoods`, {
   method: 'POST',
   body: params,
 });
}