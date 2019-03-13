import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { getSelectGoods } from '@/services/Search_S';
import { message } from 'antd';
export default {
  namespace: 'searchModel',

  state: {
   
    search:{
      classificationSED:[],
      brands:[],
      pagination: {},
      select:'',

    }



  },

  effects: {
    
     //获取搜索结果页面接口
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
        // getUpPart:{
        //   banner:action.payload.banner,
        //   homePageChangeGoodsItem:action.payload.homePageChangeGoodsItem
        // }
        search:action.payload
      }
    },	


  },
};
