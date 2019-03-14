import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { getSelectGoods } from '@/services/Search_S';
import { message } from 'antd';
export default {
  namespace: 'searchModel',

  state: {
    clickClassificationSED:'全部',
    clickBrand:'全部',
    search:{
      classificationSED:[],
      brands:[],
      pagination: {
        pageSize:0,
      },
      select:'',
    }
  },

  effects: {

     // 获取搜索结果页面接口
     *getSelectGoods({ payload }, { call, put }) {
      const response = yield call(getSelectGoods, payload);
      if(response!==undefined){
        if(response.type==1){
          yield put({
            type: 'getSelectGoodsR',
            payload: response,
          });
        }else{
          message.error('不可输入特殊字符');
        }
      }
    },
  },
  reducers: {
    getSelectGoodsR(state, action){
      return {
        ...state,
        search:action.payload
      }
    },

    saveClickClassificationSEDR(state, action){
    //  console.log('aaaa',action.payload)
      return {
        ...state,
        clickClassificationSED:action.payload
      }
    },
    saveClickBrandR(state, action){
      console.log(action.payload)
      return {
        ...state,
        clickBrand:action.payload
      }
    },


  },
};
