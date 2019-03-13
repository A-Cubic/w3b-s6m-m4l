import { stringify } from 'qs';
import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';


export async function AllClassification(params) {
  return request(`${testUrl}/llback/NewHomePage/HomePage`, {
    method: 'POST',
    body: params,
  });
}
export async function getDownPart(params) {
   return request(`${testUrl}/llback/NewHomePage/HomePageDownPart`, {
    method: 'POST',
    body: params,
  });
}

export async function getUpCountry(params) {
  return request(`${testUrl}/llback/NewHomePage/HomePageChangeGoods`, {
    method: 'POST',
    body: params,
  });
}
