import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { getCategoryGoods } from '@/services/Category_S';
import { message } from 'antd';
export default {
  namespace: 'categoryModel',

  state: {
    Category:{
      categoryImg:[],
      pagination:{},
      brands:[],
      classificationSED:[]
    }
  },

  effects: {
    

    //获取品类页接口与筛选接口
    *getCategoryGoods({ payload }, { call, put }) {
      const response = yield call(getCategoryGoods, payload);
      if(response!==undefined){
        if(response.type==1){
          yield put({
            type: 'getCategoryGoodsR',
            payload: response,
          });
        }else{
          message.error('暂无数据');
        }
      }
    },


  },

  reducers: {

    getCategoryGoodsR(state, action){
      return {
        ...state,
        // getUpPart:{
        //   banner:action.payload.banner,
        //   homePageChangeGoodsItem:action.payload.homePageChangeGoodsItem
        // }
        Category:action.payload
      }
    },	



  },
};
