import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { getDownPart } from '@/services/home_S';
import { getUserCollection} from '@/services/Brand_S';
import { getGoodsDetails } from '@/services/GoodsDetails_S';
import { message } from 'antd';

export default {
  namespace: 'goodsDetailsModel',

  state: {
    goodsDetails: {
      goodsName:'',
      goodsDes:'',
      price:'',
      goodsParameters:[],
      goodsDetailImgArr:[],
      img:[],
      imgone:'',
      ifOnload:'',
      attentionType:'',
      imgZipUrl:''
    },
    getDownPart: {
      goodsList:[]
    },
  },

  effects: {

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

       // 获取热销商品接口
    *getDownPart({ payload },{ call,put }){
      const response = yield call(getDownPart, payload);
     // console.log('~xxxxxxxxxx',response)
      if(response!==undefined){
        if(response.type == 1){
          yield put({
            type: 'getDownPartR',
            payload: response,
          })
        } else {
          message.error('数据为空，请联系客服');
        }

      }
    },

    //获取收藏接口
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
    getGoodsDetailsR(state, action){

      return {
        ...state,
       // goodsDetails:action.payload,
        goodsDetails:{
          ...state.goodsDetails,
          imgone:action.payload.img[0],
          img:action.payload.img,
          goodsParameters:action.payload.goodsParameters,
          goodsName:action.payload.goodsName,
          goodsDes:action.payload.discription,
          price:action.payload.price,
          goodsDetailImgArr:action.payload.goodsDetailImgArr,
          ifOnload:action.payload.ifOnload,
          attentionType:action.payload.attentionType,
          imgZipUrl:action.payload.imgZipUrl,
        }
      }
    },

    getDownPartR(state, action){
      return {
        ...state,
        getDownPart:action.payload
      }
    },

    changeShowImgR(state, action){
      if(state.goodsDetails.img.length<2){
        return{
          ...state,
          goodsDetails:{
            ...state.goodsDetails,
            imgone:state.goodsDetails.img[0],
          }
        }
      }
        return {
          ...state,
          goodsDetails:{
            ...state.goodsDetails,
            imgone:state.goodsDetails.img[action.payload],
          }
        }
    },
    clickShowImgR(state, action){
      return {
        ...state,
        goodsDetails:{
          ...state.goodsDetails,
          imgone:action.payload,
        }
      }
    },


    getUserCollectionR(state, action){
     
      return {
        ...state,
        goodsDetails:{
          ...state.goodsDetails,
          attentionType:action.payload
        }
        
      }
    },

  },
};
