import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { getBrandsGoods } from '@/services/Brand_S';
import { message } from 'antd';
export default {
  namespace: 'brandModel',

  state: {
    data: {
      list: [],
      pagination: {},
    },

    brandsGoods:{
      advimg:[],
      brandName:'',
      brandimg:'',
      goods:[],
      pagination:{}
    }


  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },

    *getBrandsGoods({ payload }, { call, put }) {
      const response = yield call(getBrandsGoods, payload);
     
      if(response!==undefined){
        if(response.type==1){
          yield put({
            type: 'getBrandsGoodsR',
            payload: response,
          });
        }else{
          message.error('数据为空，请联系客服');
        }
      }
    },








  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },

    getBrandsGoodsR(state, action){
    
      return {
        ...state,
         brandsGoods:action.payload
      }
    },	

  },
};
