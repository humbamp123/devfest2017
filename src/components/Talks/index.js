import React, { Component } from 'react';
import classNames from 'classnames';
import Countdown from 'react-count-count';
import Menu from '../Menu';
import Sponsors from '../Sponsors';
import Footer from '../Footer';
import 'bulma/css/bulma.css';
import c from './content.json';
import Maps from '../Maps';

class Talks extends Component {
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
        <Maps
          lat={37.787600}
          lng={-122.396600}
          eventLocation='Galvanize SF - Soma'
          eventDescription='Galvanize campuses are home to an eclectic mix of entrepreneurs, skilled programmers, expert data scientists, and men and women motivated to make an impact.'
          directions='https://goo.gl/maps/21dQqb9tccR2'
        />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default Talks;
