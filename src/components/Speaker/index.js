import React, { Component } from 'react';
import classNames from 'classnames';
import { speakers as speakerImages } from '../../constants/images'
import 'bulma/css/bulma.css';
import './Speaker.css';
import c from './content.json';


class Speaker extends Component {
  render() {
    const { match: {params} } = this.props
    return (
      <div className={'wrapper'}>
        <div className={'personCard'}>
          <div className={'personWrapper'}>
            <div className={'personPhoto'}>
              <img alt={params.name} src={speakerImages[params.name]} /> 
            </div>
          </div>
          <p className={'personName'}>{params.name}</p>
        </div>
      </div>
    );
  }
}

export default Speaker;
