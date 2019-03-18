import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';

export async function getUserCollectionBrands(params) {
  return request(`${testUrl}/llback/NewHomePage/UserCollectionBrands`, {
    method: 'POST',
    body: params,
  });
}