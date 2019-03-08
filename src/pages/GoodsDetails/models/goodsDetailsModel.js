import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { getDownPart } from '@/services/home_S';
import { getGoodsDetails } from '@/services/GoodsDetails_S';
export default {
  namespace: 'goodsDetailsModel',

  state: {
    
    goodsDetails: {
      carouselImgsArr:[],
      goodsName:'',
      goodsDes:'',
      price:'',
      goodsParameters:[
        {
          key: '1',
          name:'商品名称(中文)',
          content: 'ISHIZAWA LABS 石泽研究所 毛孔抚子日本大米面膜 10片',
        }, {
          key: '2',
          name:'品牌',
          content: '胡彦祖',
        }, {
          key: '3',
          name:'进口国',
          content: '日本',
        }, {
          key: '4',
          name:'规格',
          content: '700g/桶',
        }, {
          key: '5',
          name:'生产商',
          content: '胡彦祖',
        }, {
          key: '6',
          name:'产品功效',
          content: '产品功效',
        }
      ],
      instructionsImgsArr:[],
      goodsDetailImgArr:[],
      img:[],
      imgone:''
    },
    hotGoods: {
      list: [],
    },
    getDownPart: {
    },

  },

  effects: {
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

    // 获取详情列表
    *getGoodsDetails({ payload }, { call, put }) {
      const response = yield call(getGoodsDetails, payload);
      if(response!==undefined){
       if(response.type==1){
          yield put({
            type: 'getGoodsDetailsR',
            payload: response,
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
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },

    getGoodsDetailsR(state, action){
      return {
        ...state,
        goodsDetails:action.payload,
        goodsDetails:{
          ...state.goodsDetails,
          imgone:action.payload.img[0],
          img:action.payload.img
        }
      }
    },	

    getDownPartR(state, action){
      return {
        ...state,
        getDownPart:action.payload
      }
    },	


  },
};
