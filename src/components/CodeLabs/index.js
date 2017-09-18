import React, { Component } from 'react';
import classNames from 'classnames';
import Maps from '../Maps';
import Timer from '../Timer';
import c from './content.json';
import './CodeLabs.css'

class CodeLabs extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium', 'has-text-centered')}>
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={'codeLabsTitle'}>{c.title}</h1>
              <Timer customOptions={{endDate: '10/21/2017 10:00 AM'}} />
              <div className={classNames('button', 'registerButton', 'is-large')}>
                <span>{c.register}</span>
              </div>
            </div>
          </div>
        </section>
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
