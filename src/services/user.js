import request from '@/utils/request';
import {apiUrl,testUrl} from '@/utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent(params) {
  return request(`${apiUrl}/llback/user/currentUser`,{
    method: 'POST',
    body: params,
  });
}
