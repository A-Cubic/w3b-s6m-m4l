import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { getCountryGoods } from '@/services/JapanPavilion_S';
import { message } from 'antd';
export default {
  namespace: 'koreaPavilionModel',

  state: {
    KoreaPavilion: {}
  },

  effects: {
    

    // 获取韩国列表接口
    *getCountryGoods({ payload }, { call, put }) {
      const response = yield call(getCountryGoods, payload);
      if(response!==undefined){
       if(response.type==1){
          yield put({
            type: 'getCountryGoodsR',
            payload: response,
          });
        }else{
          message.error('数据为空，请联系客服');
        }
      }
    },


  },

  reducers: {
   
    getCountryGoodsR(state, action){
      return {
        ...state,
        KoreaPavilion:action.payload
       
      }
    },	


  },
};
