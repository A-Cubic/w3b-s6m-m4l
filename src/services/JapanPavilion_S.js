import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';


export async function getCountryGoods(params) {
  return request(`${testUrl}/llback/NewHomePage/CountryGoods`, {
   method: 'POST',
   body: params,
 });
}
