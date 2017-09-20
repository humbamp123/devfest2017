import React, { Component } from 'react';
import classNames from 'classnames';
import Maps from '../Maps';
import Timer from '../Timer';
import c from './content.json';
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
        <Timer customOptions={{endDate: '10/21/2017 10:00 AM'}} />
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
          eventLocation='Next Space Berkeley'
          eventDescription='NextSpace is a trendy co-working workspace that resides in the heart of Berkeley.'
          directions='https://goo.gl/maps/4X1hgairUf82'
        />
      </div>
    );
  }
}

export default CodeLabs;
