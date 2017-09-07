import React, { Component } from 'react';
import classNames from 'classnames';
import Timer from '../Timer';
import Menu from '../Menu';
import Footer from '../Footer';
import 'bulma/css/bulma.css';
import c from './content.json';
import Maps from '../Maps';

class Hackathon extends Component {
  render() {
    return (
      <div>
        <section className={classNames('hero', 'is-medium','is-light','is-bold', 'has-text-centered')}>
          <Menu />  
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={classNames('title')}>{c.title}</h1>
            </div>
          </div>
        </section>
        <section className={classNames('hero', 'is-small','is-light', 'has-text-centered')}>
          <div className={'hero-body'}>
            <div className={'container'}>
              <Timer customOptions={{endDate: '11/04/2017 10:00 AM'}} />
            </div>
          </div>
        </section>
        <Maps lat={37.548606} lng={-122.059009} eventLocation='42 Silicon Valley' eventDescription='Desc' directions='https://goo.gl/maps/jEcYoErqFuT2' />
        <Footer />
      </div>
    );
  }
}

export default Hackathon;
