import { getUserCollectionGoods } from '@/services/CollectionGoods_S';
import { message } from 'antd';
export default {
  namespace: 'collectionGoodsModel',
  state: {
    collectionGoods:{
      goodsList:[],
      pagination:{
        pageSize:0,
      }
    }
  },
  effects: {
    // 获取我收藏的商品列表接口
    *getUserCollectionGoods({ payload }, { call, put }) {
      const response = yield call(getUserCollectionGoods, payload);
      if(response!==undefined){
       if(response.type==1){
          yield put({
            type: 'getUserCollectionGoodsR',
            payload: response,
          });
        }else{
          message.error('数据为空，请联系客服');
        }
      }
    },
  },

  reducers: {
    getUserCollectionGoodsR(state, action){
      return {
        ...state,
        collectionGoods:action.payload
      }
    },
  },
};
