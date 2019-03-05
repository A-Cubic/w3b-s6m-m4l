import { stringify } from 'qs';
import request from '@/utils/request';

export async function HomePage(params) {
  return request('/llback/NewHomePage/HomePage', {
    method: 'POST',
    body: params,
  });
}

export async function AllClassification(params) {
  return request('/llback/NewHomePage/AllClassification', {
    method: 'POST',
    body: params,
  });
}
