import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { HomePage,AllClassification,getDownPart } from '@/services/home_S';
import { message } from 'antd';

export default {
  namespace: 'homeModel',

  state: {
    // ifOnload:'0',
    // banner:[],
    // jplist:{
    //   ifOnload:0,
    //   page:0,
    //   classification:[],
    //   goodsList:[],
    //   brandimgs:[],
    // },
    // korealist:{
    //   ifOnload:0,
    //   page:0,
    //   classification:[],
    //   goodsList:[],
    //   brandimgs:[],
    // },
    // cHlist:{
    //   ifOnload:0,
    //   page:0,
    //   classification:[],
    //   goodsList:[],
    //   brandimgs:[],
    // },


    getUpPart: {
    },
    getDownPart: {
    },





    allclassification:[],

  },

  effects: {
    // 首页上半部接口

    *getHomePage({ payload }, { call, put }) {
      const response = yield call(HomePage, payload);
      //console.log(response)
      // yield put({
      //   type: 'save',
      //   payload: response,
      // });
    },
    *getAllClassification({ payload }, { call, put }) {
      const response = yield call(AllClassification, payload);
      console.log(response)
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
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
    AllClassificationR(state, action){
     // console.log('7777',action.payload)
      return {
        ...state,
        getUpPart:action.payload
      }
    },	

    getDownPartR(state, action){
      // console.log('7777',action.payload)
       return {
         ...state,
         getDownPart:action.payload
       }
     },	

  },
};
