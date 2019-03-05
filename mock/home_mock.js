import city from './geographic/city.json';
import province from './geographic/province.json';

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
function HomePage(req, res) {
  res.send({
    "ifOnload": "0",
    "type": "1",
    "allclassification": {
      "allClassificationItems": [
        {
          "allclassification": "生活用品",
          "classificationST": "1"
        }
      ],
      "type": "1"
    },
    "banner": [
      "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/adv_POLICY.png.jpg",
      "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/adv_dixtowaj.png.jpg",
      "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg",
      "beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg"
    ],
    "jplist": {
      "ifOnload": "0",
      "type": "0",
      "page": 0,
      "adv": "beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg",
      "classification": [
        {
          "allclassification": "保健品",
          "classificationST": "5"
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
    "korealist": {
      "ifOnload": "0",
      "type": "1",
      "page": 1,
      "adv": "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/adv_POLICY.png.jpg",
      "classification": [
        {
          "allclassification": "彩妆",
          "classificationST": "13"
        }
      ],
      "goodsList": [
        {
          "imgurl": "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/201712271723140810.jpg",
          "goodsName": "韩国HASOL松林系列洗发水 500g",
          "price": "***",
          "barcode": "8809267890254"
        }
      ],
      "brandimgs": [
        "beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg",
        "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg",
        "http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/adv_ROZEBE.png.jpg"
      ]
    },
    "cHlist": {
      "ifOnload": "0",
      "type": "0",
      "page": 0,
      "adv": null,
      "classification": [
        {
          "allclassification": "健康护理",
          "classificationST": "7"
        }
      ],
      "goodsList": [],
      "brandimgs": []
    }
  });
}

export default {
  'GET /api/geographic/province': getProvince,
  // 'GET /api/geographic/city/:province': getCity,
  'POST /llback/NewHomePage/HomePage': getAllClassification,

  //
  'POST /llback/NewHomePage/AllClassification': HomePage
};
