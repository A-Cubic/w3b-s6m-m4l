import city from './geographic/city.json';
import province from './geographic/province.json';
import { message} from 'antd';
const a = 'http://192.168.0.127:54195/';

function getProvince(req, res) {
  return res.json(province);
}

function getAllClassification(req, res) {
  res.send([
    '生活用品',
    '洗护用品',
    '母婴',
    '护肤品',
    '保健品',
    '医药品',
    '健康护理',
    '运动',
    '食品',
    '彩妆',
  ]);
}
//模拟首页下半部
function getDownPart(req, res) {
  res.send({
    "ifOnload": "0",
    "type": "1",
    "goodsList": [
        {
            "imgurl": "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/17061461B6_17.jpg",
            "goodsName": "KURETAKE 美文字笔 日式图案 中字 5种",
            "price": "***",
            "barcode": "4901427281576"
        },
        {
            "imgurl": "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/17061461B6_16.jpg",
            "goodsName": "KURETAKE 美文字笔 日式图案 细字 5种",
            "price": "***",
            "barcode": "4901427281569"
        }
    ],
    "page": 1
  })
}



//模拟首页上半部
function HomePage(req, res) {
  res.send({
    "ifOnload": "0",
    "type": "1",
    "allclassification": {
        "allClassificationItems": [
            {
                "allclassification": "生活用品",
                "classificationST": "1"
            },
            {
                "allclassification": "洗护用品",
                "classificationST": "2"
            }
        ],
        "type": "1"
    },
    "banner": [
        "http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg",
        "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/adv_POLICY.png.jpg",
        "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/adv_dixtowaj.png.jpg",
        "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg",
        
    ],
    "homePageChangeGoodsItem": [
        {
            "country": "中国",
            "ifOnload": "0",
            "type": "1",
            "page": 0,
            "adv": null,
            "classification": [
                {
                    "allclassification": "健康护理",
                    "classificationST": "7"
                },
                {
                    "allclassification": "彩妆",
                    "classificationST": "13"
                }
            ],
            "goodsList": [],
            "brandimgs": []
        },
        {
            "country": "日本",
            "ifOnload": "0",
            "type": "1",
            "page": 0,
            "adv": "beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg",
            "classification": [
                {
                    "allclassification": "保健品",
                    "classificationST": "5"
                },
                {
                    "allclassification": "健康护理",
                    "classificationST": "7"
                }
            ],
            "goodsList": [],
            "brandimgs": [
                "beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg",
                "beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg",
                "beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg",
                "beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg"
            ]
        },
        {
            "country": "韩国",
            "ifOnload": "0",
            "type": "1",
            "page": 1,
            "adv": "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/adv_POLICY.png.jpg",
            "classification": [
                {
                    "allclassification": "彩妆",
                    "classificationST": "13"
                },
                {
                    "allclassification": "护肤品",
                    "classificationST": "4"
                }
            ],
            "goodsList": [
                {
                    "imgurl": "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/201712271723140810.jpg",
                    "goodsName": "韩国HASOL松林系列洗发水 500g",
                    "price": "***",
                    "barcode": "8809267890254"
                },
                {
                    "imgurl": "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/201712271721459416.jpg",
                    "goodsName": "韩国HASOL松林系列日中护发液 100ml",
                    "price": "***",
                    "barcode": "8809267890261"
                }
            ],
            "brandimgs": [
                "beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg",
                "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg",
                "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg"
            ]
        }
    ]
  });
}

export default {
  'GET /api/geographic/province': getProvince,
  // 'GET /api/geographic/city/:province': getCity,
  'POST /llback/NewHomePage/HomePage': getAllClassification,

  // 模拟首页上半部 getDownPart,
  'POST /llback/NewHomePage/AllClassification': HomePage,
  // 模拟首页下半部 
  'POST /llback/NewHomePage/HomePageDownPart': getDownPart,
  // 'POST /llback/NewHomePage/HomePageDownPart': a,
};

