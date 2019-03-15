import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';

export async function getGoodsDetails(params) {
  return request(`${apiUrl}/llback/NewHomePage/GoodsDetails`, {
   method: 'POST',
   body: params,
 });
}
