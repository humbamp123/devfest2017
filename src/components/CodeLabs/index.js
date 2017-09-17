import React, { Component } from 'react';
import classNames from 'classnames';
import Timer from '../Timer';
import c from './content.json';
import Maps from '../Maps';

class CodeLabs extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium','is-light','is-bold', 'has-text-centered')}>
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={classNames('title')}>{c.title}</h1>
              <div className={'timer-container'}>
                <div className={'has-text-centered'}>
                  <Countdown options={{endDate: '11/04/2017 10:00 AM'}} />
                  <p className={classNames('subtitle')}>{c.timeTill}</p>
                </div>
              </div>
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
