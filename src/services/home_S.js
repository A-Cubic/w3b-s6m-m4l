import { stringify } from 'qs';
import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';


export async function AllClassification(params) {
  return request(`${apiUrl}/llback/NewHomePage/HomePage`, {
    method: 'POST',
    body: params,
  });
}
export async function getDownPart(params) {
   return request(`${apiUrl}/llback/NewHomePage/HomePageDownPart`, {
    method: 'POST',
    body: params,
  });
}

export async function getUpCountry(params) {
  return request(`${apiUrl}/llback/NewHomePage/HomePageChangeGoods`, {
    method: 'POST',
    body: params,
  });
}


export async function getChain(params) {
  return request(`${apiUrl}/llback/NewHomePage/HomePageChangeGoodsCHINA`, {
    method: 'POST',
    body: params,
  });
}