import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { getSelectGoods } from '@/services/Search_S';
import { message } from 'antd';
export default {
  namespace: 'searchModel',

  state: {
    data: {
      list: [],
      pagination: {},
    },

    search:{}



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

     //获取搜索结果页面接口
     *getSelectGoods({ payload }, { call, put }) {
      const response = yield call(getSelectGoods, payload);

      console.log('xxxxxxxxxxxx')
      if(response!==undefined){
        if(response.type==1){
          yield put({
            type: 'getSelectGoodsR',
            payload: response,
          });
        }else{
          message.error('暂无数据');
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

    getSelectGoodsR(state, action){
      return {
        ...state,
        // getUpPart:{
        //   banner:action.payload.banner,
        //   homePageChangeGoodsItem:action.payload.homePageChangeGoodsItem
        // }
        search:action.payload
      }
    },	


  },
};
