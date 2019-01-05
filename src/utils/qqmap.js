export default class QQMap {
  constructor(id) {
    this.container = document.getElementById(id);
    this.qqMap = null;
  }

  init() {
    this.qqMap = new qq.maps.Map(document.querySelector('.container'), {
      center: new qq.maps.LatLng(22.548380, 113.945070), // 地图的中心地理坐标
      zoom: 80, // 地图缩放级别
      mapStyleId: 'style1', // 该key绑定的style1对应于经典地图样式，若未绑定将弹出无权限提示窗
      mapTypeId: qq.maps.MapTypeId.ROADMAP, // 该地图类型显示普通的街道地图。
      // mapTypeId: qq.maps.MapTypeId.SATELLITE, // 该地图类型显示卫星图像。
      // mapTypeId: qq.maps.MapTypeId.HYBRID, // 该地图类型显示卫星图像上的主要街道透明层。
    });
  }
}
