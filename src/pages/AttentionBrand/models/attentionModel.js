import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { message } from 'antd';
import { getUserCollectionBrands } from '@/services/AttentionBrand_S';
export default {
  namespace: 'attentionModel',

  state: {
    
    attentionBrand: {
      brandsList:[
        
      ],
      ifOnload:'',
      pagination:{
        pageSize:0,
      },
      
    }
  },

  effects: {
    
    // 获取关注品牌面接口
    *getUserCollectionBrands({ payload }, { call, put }) {
      const response = yield call(getUserCollectionBrands, payload);
      if(response!==undefined){
        if(response.type==1){
          yield put({
            type: 'getUserCollectionBrandsR',
            payload: response,
          });
        }else{
          message.error('不可输入特殊字符');
        }
      }
    },




  },

  reducers: {
  

    getUserCollectionBrandsR(state, action){
      //console.log(action.payload)
      return {
        ...state,
        attentionBrand:action.payload
      }
    },

  },
};
