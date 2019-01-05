export default class PanoramaMap {
  constructor(id) {
    this.container = document.getElementById(id);
    this.pano = null;
  }

  init({ pano, pov }) {
    this.pano = new qq.maps.Panorama(document.querySelector('.panorama'), {
      pano,
      pov
    });
  }

  getPano = () => this.pano.getPano();

  getPosition = () => this.pano.getPosition();

  getPov = () => this.pano.getPov();

  getHeading = () => this.pano.getPov().heading;

  getPitch = () => this.pano.getPov().pitch;

  getZoom = () => this.pano.getZoom();

  setPano = pano => this.pano.setPano(pano);

  setPov = pov => this.pano.setPov(pov);

  setHeading = heading => this.pano.setPov({ heading });

  setPitch = pitch => this.pano.setPov({ pitch });

  setZoom = () => this.pano.setZoom();
}
