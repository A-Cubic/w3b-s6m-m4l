import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';


export async function getCountryGoods(params) {
  return request(`${apiUrl}/llback/NewHomePage/CountryGoods`, {
   method: 'POST',
   body: params,
 });
}
