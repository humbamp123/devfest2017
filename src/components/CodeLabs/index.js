import React, { Component } from 'react';
import classNames from 'classnames';
import Agenda from '../Agenda'
import c from './content.json';
import Maps from '../Maps';
import Timer from '../Timer';
import { codelabHero } from '../../constants/images';
import './CodeLabs.css'

class CodeLabs extends Component {
  render() {
    return (
      <div>
      <div className={'background'} style={{backgroundImage: `url(${codelabHero})`}}>
        <section className={classNames('hero', 'is-medium', 'has-text-centered')}>
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={'codeLabsTitle'}>{c.title}</h1>
              <h2 className={classNames('codeLabsDate')}>{c.date}</h2>
              <div className={classNames('container', 'blurbBody')}>
                <p className={classNames('codeLabsBlurb')}>{c.description}</p>
              </div>
              <div className={classNames('button', 'registerButton', 'is-large')}>
                <span>{c.register}</span>
              </div>
            </div>
          </div>
        </section>
        </div>
        <Agenda event="codelabs"/>
        <Timer customOptions={{endDate: '10/21/2017 10:00 AM', 'event': c.timeTill}} />
        <div className={classNames('about')}>
          <div className={'container'}>
              <h2 className={classNames('aboutTitle')}>{c.aboutTitle}</h2>
              <div className={classNames('container', 'aboutBody')}>
                <p className={classNames('aboutBody')}>{c.aboutBody}</p>
              </div>
          </div>
        </div>
        <Maps
          lat={37.870400}
          lng={-122.268900}
          eventLocation={c.place}
          eventAddress1={c.address1}
          eventAddress2={c.address2}
          directions='https://goo.gl/maps/4X1hgairUf82'
        />
      </div>
    );
  }
}

export default CodeLabs;
