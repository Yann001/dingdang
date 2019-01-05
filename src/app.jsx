import React from 'react';

import { QQMap, PanoramaMap } from './utils';
import Api from './api';

import './style/index.css';

class App extends React.Component {
  componentDidMount() {
    const qqmap = new QQMap('container');
    const pano = new PanoramaMap('panorama');
    qqmap.init();
    pano.init({
      pano: '10041022150925143444800',
      pov: {
        heading: 263.3,
        pitch: -8
      }
    });

    window.pano = pano;

    setInterval(() => {
      console.log('3s');
      console.log(pano.getHeading());
      pano.setHeading(pano.getHeading() + 10);
    }, 2000);
  }

  testBtnHandle = async () => {
    try {
      const res = await Api.search('科兴科学园');
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="wrap">
        <div id="container" className="container" />
        <div id="panorama" className="panorama" />
        <div className="btn-group">
          <button type="button" onClick={this.testBtnHandle}>Test</button>
        </div>
      </div>
    );
  }
}

export default App;
