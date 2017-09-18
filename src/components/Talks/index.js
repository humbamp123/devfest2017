import React, { Component } from 'react';
import classNames from 'classnames';
import Maps from '../Maps';
import Timer from '../Timer';
import 'bulma/css/bulma.css';
import c from './content.json';
import './Talks.css'

class Talks extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium', 'has-text-centered')}>
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={'talkTitle'}>{c.title}</h1>
              <Timer customOptions={{endDate: '10/28/2017 9:00 AM'}} />
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
      </div>
    );
  }
}

export default Talks;
