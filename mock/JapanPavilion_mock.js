import city from './geographic/city.json';
import province from './geographic/province.json';

function getProvince(req, res) {
  return res.json(province);
}

function getCity(req, res) {
  return res.json(city[req.params.province]);
}

function getCountryGoods(req, res) {
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

export default {
  'GET /api/geographic/province': getProvince,
  'GET /api/geographic/city/:province': getCity,
 // 'POST /llback/NewHomePage/CountryGoods': getCountryGoods,
};
