import React, { Component } from 'react'
import { render } from 'react-dom'
import { } from '@kolpa/ar-ts'
import { AFrameRenderer, Marker } from 'react-web-ar'

class Conectese extends Component {
  render() {
    return (
      <AFrameRenderer
        arToolKit={{ sourceType: 'image', sourceUrl: './images/hiro_marker.png'}}
        stats
      >
        <Marker parameters={{ preset: 'hiro' }}>
          <a-box color='pink' material='opacity: 1;' position="0 0.003 0" scale='0.4 0.4 0.4'>
            <a-animation attribute="rotation" to="360 0 0" dur="5000" easing="linear" repeat="indefinite" />
          </a-box>
        </Marker>
      </AFrameRenderer>
    )
  }
}

render(<Conectese />, document.getElementById('root'))

export default Conectese
