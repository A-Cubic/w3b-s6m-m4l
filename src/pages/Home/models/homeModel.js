import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { HomePage,AllClassification } from '@/services/home_S';

export default {
  namespace: 'homeModel',

  state: {
    ifOnload:'0',
    banner:[],
    jplist:{
      ifOnload:0,
      page:0,
      classification:[],
      goodsList:[],
      brandimgs:[],
    },
    korealist:{
      ifOnload:0,
      page:0,
      classification:[],
      goodsList:[],
      brandimgs:[],
    },
    cHlist:{
      ifOnload:0,
      page:0,
      classification:[],
      goodsList:[],
      brandimgs:[],
    },





    allclassification:[],

  },

  effects: {
    // 首页上半部接口

    *getHomePage({ payload }, { call, put }) {
      const response = yield call(HomePage, payload);
      console.log(response)
      // yield put({
      //   type: 'save',
      //   payload: response,
      // });
    },
    *getAllClassification({ payload }, { call, put }) {
      const response = yield call(AllClassification, payload);
      console.log(response)
      // yield put({
      //   type: 'save',
      //   payload: response,
      // });
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
  },
};
