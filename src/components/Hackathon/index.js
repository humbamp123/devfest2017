import React, { Component } from 'react';
import classNames from 'classnames';
import Countdown from 'react-count-count';
import Menu from '../Menu';
import Agenda from '../Agenda'
import Sponsors from '../Sponsors';
import Maps from '../Maps';
import Footer from '../Footer';
import 'bulma/css/bulma.css';
import './Hackathon.css';
import c from './content.json';

class Hackathon extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium', 'is-light', 'is-bold', 'has-text-centered')}>
          <Menu />
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
        <Agenda event="hackathon"/>
        <Maps
          lat={37.548606}
          lng={-122.059009}
          eventLocation='42 Silicon Valley'
          eventDescription='42 Silicon Valley is a tuition free programming university with a unique, month-long , merit-based admissions program. The 42 campus has open computer lab facilities capable of hosting over 1000 people.'
          directions='https://goo.gl/maps/jEcYoErqFuT2'
        />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default Hackathon;
