import fetch from 'dva/fetch';
import { notification } from 'antd';
import { routerRedux } from 'dva/router';
import router from 'umi/router';
import hash from 'hash.js';
import { isAntdPro } from './utils';
import { getHeader } from './whole';

const apiUrl = process.env.NODE_ENV === 'development' ? 'http://console.llwell.net' : '';
const testUrl = process.env.NODE_ENV === 'development' ? 'http://192.168.0.127:54195' : '';
export {apiUrl,testUrl};
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
// 业务错误列表
const serverCodeMessage = {
  '1': { code: 401, msg: '登录信息过期，请重新登录' },
  '2': { code: 403, msg: '没有该功能相关权限' },
  '3': { code: 401, msg: '登录信息有误，请重新登录' },
  '4': { code: 404, msg: '请求目标数据不存在' },
  '5': { code: 500, msg: '服务器繁忙，请稍后重试' },
  '6': { code: 500, msg: '数据处理有误' },
  '7': { code: 500, msg: '请求参数不正确' },
  'default': { code: 500, msg: '未知错误' },

  '500': { code: 5003, msg: '数据处理有误' },
  '4000': { code: 401, msg: '登录信息过期，请重新登录' },
  '4003': { code: 4031, msg: '没有该功能相关权限' },
};
// const checkStatus = response => {
//   console.log('res',response)
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   const errortext = codeMessage[response.status] || response.statusText;
//   notification.error({
//     message: `请求错误 ${response.status}: ${response.url}`,
//     description: errortext,
//   });
//   const error = new Error(errortext);
//   error.name = response.status;
//   error.response = response;
//   throw error;
// };
  function checkStatus(response){
    console.log('res',response)
    if (response.status >= 200 && response.status < 300) {
      const code = response.headers.get('code');
      // console.log('sssscode',code)

      if (code !== null && code !== '0') {
        const error = new Error(response.headers.get('msg'));
        error.response = response;
        const serverCode = serverCodeMessage[code].code || serverCodeMessage['default'].code;
        const serverMsg = serverCodeMessage[code].msg || serverCodeMessage['default'].msg;
        notification.error({
          message: serverMsg,
          description: response.headers.get('msg'),
        });
        error.name = serverCode;
        throw error;
      } else if(code==4000){
        window.location.href='http://console.llwell.net'
      }
      return response;
    }
    const errorText = codeMessage[response.status] || response.statusText;
    notification.error({
      message: `请求错误 ${response.status}: ${response.url}`,
      description: errorText,
    });
    const error = new Error(errorText);
    error.name = response.status;
    error.response = response;
    throw error;
  }
const cachedSave = (response, hashcode) => {
  /**
   * Clone a response data and store it in sessionStorage
   * Does not support data other than json, Cache only json
   */
  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.match(/application\/json/i)) {
    // All data is saved as text
    response
      .clone()
      .text()
      .then(content => {
        sessionStorage.setItem(hashcode, content);
        sessionStorage.setItem(`${hashcode}:timestamp`, Date.now());
      });
  }
  return response;
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, option) {
  const options = {
    expirys: isAntdPro(),
    ...option,
  };
  /**
   * Produce fingerprints based on url and parameters
   * Maybe url has the same parameters
   */
  const fingerprint = url + (options.body ? JSON.stringify(options.body) : '');
  const hashcode = hash
    .sha256()
    .update(fingerprint)
    .digest('hex');

  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {

    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };


      if (getHeader().token !== '') {
        newOptions.headers = {
          ...getHeader(),
          ...newOptions.headers,
        };
      }
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
    }

  }
// console.warn('oooooo',newOptions)
  const expirys = options.expirys && 60;
  // options.expirys !== false, return the cache,
  if (options.expirys !== false) {
    const cached = sessionStorage.getItem(hashcode);
    const whenCached = sessionStorage.getItem(`${hashcode}:timestamp`);
    if (cached !== null && whenCached !== null) {
      const age = (Date.now() - whenCached) / 1000;
      if (age < expirys) {
        const response = new Response(new Blob([cached]));
        return response.json();
      }
      sessionStorage.removeItem(hashcode);
      sessionStorage.removeItem(`${hashcode}:timestamp`);
    }
  }
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => cachedSave(response, hashcode))
    .then(response => {
      // DELETE and 204 do not return data by default
      // using .json will report an error.
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .catch(e => {
      const status = e.name;
      console.log('catch',status)
      if (status === 401) {
        // @HACK
        /* eslint-disable no-underscore-dangle */
        window.g_app._store.dispatch({
          type: 'login/logout',
        });
        return;
      }
      // environment should not be used
      if (status === 403) {
        router.push('/exception/403');
        return;
      }
      if (status <= 504 && status >= 500) {
        router.push('/exception/500');
        return;
      }
      if (status >= 404 && status < 422) {
        router.push('/exception/404');
      }
    });
}
