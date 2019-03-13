import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';

export async function getSelectGoods(params) {
  return request(`${apiUrl}/llback/NewHomePage/SelectGoods`, {
   method: 'POST',
   body: params,
 });
}
