import { stringify } from 'qs';
import request from '@/utils/request';

export async function HomePage(params) {
  return request('/llback/NewHomePage/HomePage', {
    method: 'POST',
    body: params,
  });
}

export async function AllClassification(params) {
  return request('http://192.168.0.127:54195/llback/NewHomePage/HomePage', {
 // return request('/llback/NewHomePage/AllClassification', {
    method: 'POST',
    body: params,
  });
}
export async function getDownPart(params) {
   return request('http://192.168.0.127:54195/llback/NewHomePage/HomePageDownPart', {
    //return request('/llback/NewHomePage/HomePageDownPart', {
    method: 'POST',
    body: params,
  });
}

export async function getUpCountry(params) {
  return request('http://192.168.0.127:54195/llback/NewHomePage/HomePageChangeGoods', {
    //return request('/llback/NewHomePage/HomePageChangeGoods', {
    method: 'POST',
    body: params,
  });
}