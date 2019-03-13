import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';

export async function getSelectGoods(params) {
  return request(`${testUrl}/llback/NewHomePage/SelectGoods`, {
   method: 'POST',
   body: params,
 });
}
