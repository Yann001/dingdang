import Reqwest from 'reqwest';

const key = 'P5ABZ-72QK5-V5AIG-Q6BXO-TZMZS-ZXF5Y';

class Api {
  search(keyword, boundary = 'region(深圳)') {
    return Reqwest({
      url: 'https://apis.map.qq.com/ws/place/v1/search',
      type: 'jsonp',
      data: {
        keyword: encodeURI(keyword),
        boundary: encodeURI(boundary),
        output: 'jsonp',
        key
      }
    });
  }

  getPano(location) {
    return Reqwest({
      url: 'https://apis.map.qq.com/ws/streetview/v1/getpano',
      data: {
        location,
        key
      }
    });
  }
}

export default new Api();
