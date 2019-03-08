import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { getBrandsGoods } from '@/services/Brand_S';
import { message } from 'antd';
export default {
  namespace: 'brandModel',

  state: {
    brandsGoods:{
      advimg:[],
      brandName:'',
      brandimg:'',
      goods:[],
      pagination:{}
    }
  },

  effects: {
    //获取品牌列表 分页接口
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
    getBrandsGoodsR(state, action){
    
      return {
        ...state,
         brandsGoods:action.payload
      }
    },	

  },
};
