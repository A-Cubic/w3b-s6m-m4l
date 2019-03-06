import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { HomePage,AllClassification,getDownPart,getUpCountry } from '@/services/home_S';
import { message } from 'antd';

export default {
  namespace: 'homeModel',
  state: {
    getUpPart: {
      banner:[],
      homePageChangeGoodsItem:[]
    },
    getDownPart: {
    },

    //allclassification:[],

  },

  effects: {
   

    // *getHomePage({ payload }, { call, put }) {
    //   const response = yield call(HomePage, payload);
    //   //console.log(response)
    //   // yield put({
    //   //   type: 'save',
    //   //   payload: response,
    //   // });
    // },
     // 首页上半部接口
    *getAllClassification({ payload }, { call, put }) {
      const response = yield call(AllClassification, payload);
      if(response!==undefined){
        if(response.type==1){
          yield put({
            type: 'AllClassificationR',
            payload: response,
          });
        }else{
          message.error('数据为空，请联系客服');
        }
      }
    },
     // 首页上半部接口换一批
     *getUpCountry({ payload }, { call, put }) {
      const response = yield call(getUpCountry, payload);
     // console.log('payload',payload)
      if(response!==undefined){
        if(response.type==1){
          yield put({
            type: 'getUpCountryR',
            payload: {
              response,
              ...payload
            }
          });
        }else{
          message.error('数据为空，请联系客服');
        }
      }
    },
     // 首页下半部接口+换一批
    *getDownPart({ payload },{ call,put }){
      const response = yield call(getDownPart, payload);
     // console.log('~xxxxxxxxxx',response)
      if(response!==undefined){
        if(response.type==1){
        //  console.log(1111)
          yield put({
            type: 'getDownPartR',
            payload: response,
          })
        } else {
          message.error('数据为空，请联系客服');
        }
        
      }
    },
  },

  reducers: {
    AllClassificationR(state, action){
      return {
        ...state,
        getUpPart:{
          banner:action.payload.banner,
          homePageChangeGoodsItem:action.payload.homePageChangeGoodsItem
        }
      }
    },	

    getDownPartR(state, action){
       return {
         ...state,
         getDownPart:action.payload
       }
     },	
     getUpCountryR(state, action){
 state.getUpPart.homePageChangeGoodsItem[action.payload.index] = action.payload.response
       return {
         ...state,
         getUpPart:{
          ...state.getUpPart,
          homePageChangeGoodsItem:state.getUpPart.homePageChangeGoodsItem
         }
       }
     },
  },
};
