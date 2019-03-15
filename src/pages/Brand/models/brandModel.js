import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { getBrandsGoods ,getUserCollection} from '@/services/Brand_S';
import { message } from 'antd';
export default {
  namespace: 'brandModel',

  state: {
    
    brandsGoods:{
      ifOnload:'',
      advimg:[],
      brandName:'',
      brandimg:'',
      attentionType:'',
      goods:[],
      pagination:{
        pageSize:0,
      },
      
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

    

    //获取关注接口
    *getUserCollection({ payload }, { call, put }) {
      const response = yield call(getUserCollection, payload);
      if(response!==undefined){

        if(response.type==1){
          //message.success(response.msg);
          yield put({
            type: 'getUserCollectionR',
            payload: payload.type
          });
        }else{
          message.error(response.msg);
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

    getUserCollectionR(state, action){
     
      return {
        ...state,
        brandsGoods:{
          ...state.brandsGoods,
          attentionType:action.payload
        }
        
      }
    },

  },
};
