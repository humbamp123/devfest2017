import React, { Component } from 'react';
import classNames from 'classnames';
import Timer from '../Timer';
import Maps from '../Maps';
import 'bulma/css/bulma.css';
import './Hackathon.css';
import c from './content.json';

class Hackathon extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium', 'has-text-centered')}>
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={classNames('hackathonTitle')}>{c.title}</h1>
              <Timer customOptions={{endDate: '11/04/2017 10:00 AM'}} />
              <div className={classNames('button', 'registerButton', 'is-large')}>
                <span>{c.register}</span>
              </div>
            </div>
          </div>
        </section>
        <Maps
          lat={37.548606}
          lng={-122.059009}
          eventLocation='42 Silicon Valley'
          eventDescription='42 Silicon Valley is a tuition free programming university with a unique, month-long , merit-based admissions program. The 42 campus has open computer lab facilities capable of hosting over 1000 people.'
          directions='https://goo.gl/maps/jEcYoErqFuT2'
        />
      </div>
    );
  }
}

export default Hackathon;
